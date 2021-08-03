/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_View_Tips extends fgui.GComponent {

	public m_tip:fgui.GTextField;
	public static URL:string = "ui://ogcji5i7is8j4q";

	public static createInstance():UI_View_Tips {
		return <UI_View_Tips>(fgui.UIPackage.createObject("Main", "View_Tips"));
	}

	protected onConstruct():void {
		this.m_tip = <fgui.GTextField>(this.getChildAt(0));
	}
}