/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_com_team_001 from "./UI_com_team_001";
import UI_View_Tips from "./UI_View_Tips";
import UI_com_effect_hit from "./UI_com_effect_hit";
import UI_com_skill from "./UI_com_skill";
import UI_com_team_002 from "./UI_com_team_002";
import UI_View_Victory from "./UI_View_Victory";
import UI_View_Main from "./UI_View_Main";

export default class MainBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_com_team_001.URL, UI_com_team_001);
		fgui.UIObjectFactory.setExtension(UI_View_Tips.URL, UI_View_Tips);
		fgui.UIObjectFactory.setExtension(UI_com_effect_hit.URL, UI_com_effect_hit);
		fgui.UIObjectFactory.setExtension(UI_com_skill.URL, UI_com_skill);
		fgui.UIObjectFactory.setExtension(UI_com_team_002.URL, UI_com_team_002);
		fgui.UIObjectFactory.setExtension(UI_View_Victory.URL, UI_View_Victory);
		fgui.UIObjectFactory.setExtension(UI_View_Main.URL, UI_View_Main);
	}
}