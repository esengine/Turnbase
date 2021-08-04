/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_com_team_001 from "./UI_com_team_001";
import UI_com_team_002 from "./UI_com_team_002";

export default class UI_View_Main extends fgui.GComponent {

	public m_team_0:UI_com_team_001;
	public m_team_2:UI_com_team_001;
	public m_team_1:UI_com_team_002;
	public m_team:fgui.GGroup;
	public m_enemy_2:fgui.GComponent;
	public m_enemy_1:fgui.GComponent;
	public m_enemy_0:fgui.GComponent;
	public m_enemy:fgui.GGroup;
	public static URL:string = "ui://ogcji5i7mlyp0";

	public static createInstance():UI_View_Main {
		return <UI_View_Main>(fgui.UIPackage.createObject("Main", "View_Main"));
	}

	protected onConstruct():void {
		this.m_team_0 = <UI_com_team_001>(this.getChildAt(1));
		this.m_team_2 = <UI_com_team_001>(this.getChildAt(2));
		this.m_team_1 = <UI_com_team_002>(this.getChildAt(3));
		this.m_team = <fgui.GGroup>(this.getChildAt(4));
		this.m_enemy_2 = <fgui.GComponent>(this.getChildAt(5));
		this.m_enemy_1 = <fgui.GComponent>(this.getChildAt(6));
		this.m_enemy_0 = <fgui.GComponent>(this.getChildAt(7));
		this.m_enemy = <fgui.GGroup>(this.getChildAt(8));
	}
}