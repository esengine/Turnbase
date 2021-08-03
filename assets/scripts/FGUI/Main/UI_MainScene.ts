/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_MainScene extends fgui.GComponent {

	public m_team_1:fgui.GMovieClip;
	public m_team_2:fgui.GMovieClip;
	public m_team_3:fgui.GMovieClip;
	public static URL:string = "ui://ogcji5i7mlyp0";

	public static createInstance():UI_MainScene {
		return <UI_MainScene>(fgui.UIPackage.createObject("Main", "MainScene"));
	}

	protected onConstruct():void {
		this.m_team_1 = <fgui.GMovieClip>(this.getChildAt(1));
		this.m_team_2 = <fgui.GMovieClip>(this.getChildAt(2));
		this.m_team_3 = <fgui.GMovieClip>(this.getChildAt(3));
	}
}