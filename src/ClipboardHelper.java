import java.awt.*;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;

public class ClipboardHelper {
    /**
     * 读取剪切板内容
     */
    public static String getSysClipboardText() {
        Transferable clipTf = Toolkit.getDefaultToolkit().getSystemClipboard().getContents(null);
        if (clipTf != null && clipTf.isDataFlavorSupported(DataFlavor.stringFlavor)) {
            try {
                return (String) clipTf.getTransferData(DataFlavor.stringFlavor);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }

    /**
     * 将内容写入剪切板
     */
    public static void setSysClipboardText(String str) {
        Clipboard clip = Toolkit.getDefaultToolkit().getSystemClipboard();
        Transferable tText = new StringSelection(str);
        clip.setContents(tText, null);
    }
}
