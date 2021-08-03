/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_com_effect_hit extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_effect_0:fgui.GMovieClip;
	public m_effect_1:fgui.GMovieClip;
	public static URL:string = "ui://ogcji5i7is8j4r";

	public static createInstance():UI_com_effect_hit {
		return <UI_com_effect_hit>(fgui.UIPackage.createObject("Main", "com_effect_hit"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_effect_0 = <fgui.GMovieClip>(this.getChildAt(0));
		this.m_effect_1 = <fgui.GMovieClip>(this.getChildAt(1));
	}
}