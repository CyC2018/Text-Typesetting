import java.util.regex.Pattern;

public class CharTypeHelper {
    private static Pattern english = Pattern.compile("[a-zA-Z]");
    private static Pattern chinese = Pattern.compile("[\\u4e00-\\u9fa5]");
    private static Pattern digit = Pattern.compile("[0-9]");

    public static CharType getCharType(char c) {
        String s = c + "";
        if (english.matcher(s).find()) return CharType.English;
        if (chinese.matcher(s).find()) return CharType.Chinses;
        if (digit.matcher(s).find()) return CharType.Digit;
        return CharType.Other;
    }
}
