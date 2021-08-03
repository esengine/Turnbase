/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_View_Victory extends fgui.GComponent {

	public m_btn_next:fgui.GButton;
	public m_btn_return:fgui.GButton;
	public static URL:string = "ui://ogcji5i7mfjq4i";

	public static createInstance():UI_View_Victory {
		return <UI_View_Victory>(fgui.UIPackage.createObject("Main", "View_Victory"));
	}

	protected onConstruct():void {
		this.m_btn_next = <fgui.GButton>(this.getChildAt(2));
		this.m_btn_return = <fgui.GButton>(this.getChildAt(3));
	}
}