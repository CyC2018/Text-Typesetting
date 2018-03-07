import java.util.ArrayList;
import java.util.List;

public class Typesetting {

    public static String typeset(String text) {
        List<String> contents = TextContentHelper.cutLineByLine(text);
        List<String> ret = new ArrayList<String>();
        for (String line : contents) {
            line = TrimHelper.rTrim(line); // 去除右边多于的空格的空格
            StringBuilder newLine = new StringBuilder();
            int n = line.length();
            for (int i = 0; i < n; i++) {
                newLine.append(line.charAt(i));
                if (shouldAddSpace(line, i)) {
                    newLine.append(" ");
                }
            }
            ret.add(newLine.toString());
        }
        ret = removeRedundantLine(ret);
        return TextContentHelper.jointLineByLine(ret);
    }

    private static boolean shouldAddSpace(String line, int index) {
        if (index == line.length() - 1) {
            return false;
        }
        CharType curType = CharTypeHelper.getCharType(line.charAt(index));
        CharType nextType = CharTypeHelper.getCharType(line.charAt(index + 1));
        if (curType == CharType.English && nextType == CharType.Chinses) {
            // 英文 + 中文
            return true;
        }
        if (curType == CharType.Chinses && nextType == CharType.English) {
            // 中文 + 英文
            return true;
        }
        if (curType == CharType.Digit && nextType == CharType.Chinses) {
            // 数字 + 中文
            return true;
        }
        if (curType == CharType.Chinses && nextType == CharType.Digit) {
            // 中文 + 数字
            return true;
        }
        return false;
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
