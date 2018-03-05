import java.util.regex.Pattern;

public class TrimHelper {
    private final static Pattern LTRIM = Pattern.compile("^\\s+");
    private final static Pattern RTRIM = Pattern.compile("\\s+$");

    public static String lTrim(String s) {
        return LTRIM.matcher(s).replaceAll("");
    }

    public static String rTrim(String s) {
        return RTRIM.matcher(s).replaceAll("");
    }
}
