import java.util.ArrayList;
import java.util.List;

public class Typesetting {

    public static String typeset(String text) {
        List<String> contents = TextContentHelper.cutLineByLine(text);
        List<String> ret = new ArrayList<String>();
        for (String line : contents) {
            line = TrimHelper.rTrim(line); // 去除右边多于的空格的空格
            line = line.replaceAll("([a-zA-Z0-9)'>)}\\]])([\\u4e00-\\u9fa5])","$1 $2");
            line = line.replaceAll("([\\u4e00-\\u9fa5])([a-zA-Z0-9'(<{])","$1 $2");
            ret.add(line);
        }
        ret = removeRedundantLine(ret);
        return TextContentHelper.jointLineByLine(ret);
    }

    /**
     * 去除多余空行
     */
    private static List<String> removeRedundantLine(List<String> contents) {
        List<String> ret = new ArrayList<String>();
        for (int i = 0; i < contents.size(); i++) {
            String str = contents.get(i);
            if (str.isEmpty() && (i == contents.size() - 1 || contents.get(i + 1).isEmpty())) {
                continue;
            }
            ret.add(str);
        }
        return ret;
    }
}
