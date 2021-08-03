/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_com_skill extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_skill1:fgui.GMovieClip;
	public m_skill2:fgui.GMovieClip;
	public m_skill3:fgui.GMovieClip;
	public static URL:string = "ui://ogcji5i7is8j4s";

	public static createInstance():UI_com_skill {
		return <UI_com_skill>(fgui.UIPackage.createObject("Main", "com_skill"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_skill1 = <fgui.GMovieClip>(this.getChildAt(0));
		this.m_skill2 = <fgui.GMovieClip>(this.getChildAt(1));
		this.m_skill3 = <fgui.GMovieClip>(this.getChildAt(2));
	}
}