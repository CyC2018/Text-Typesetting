import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TextContentHelper {
    public static List<String> cutLineByLine(String text) {
        List<String> contents = new ArrayList<String>();
        Scanner scanner = new Scanner(text);
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            contents.add(line);
        }
        scanner.close();
        return contents;
    }

    public static String jointLineByLine(List<String> contents) {
        StringBuilder ret = new StringBuilder();
        for (String str : contents) {
            ret.append(str);
            ret.append(CommonHelper.getLineSeparator());
        }
        return ret.toString();
    }
}
