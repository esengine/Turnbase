/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_com_team_002 extends fgui.GComponent {

	public m_animation:fgui.GMovieClip;
	public static URL:string = "ui://ogcji5i7is8j4v";

	public static createInstance():UI_com_team_002 {
		return <UI_com_team_002>(fgui.UIPackage.createObject("Main", "com_team_002"));
	}

	protected onConstruct():void {
		this.m_animation = <fgui.GMovieClip>(this.getChildAt(0));
	}
}