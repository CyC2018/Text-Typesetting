public class App {
    public static void main(String[] args) {
        String text = ClipboardHelper.getSysClipboardText();
        System.out.println();
        System.out.println("----- before -----");
        System.out.println();
        System.out.println(text);

        text = Typesetting.typeset(text);
        System.out.println();
        System.out.println("----- after -----");
        System.out.println();
        System.out.println(text);
        System.out.println();

        ClipboardHelper.setSysClipboardText(text);

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
