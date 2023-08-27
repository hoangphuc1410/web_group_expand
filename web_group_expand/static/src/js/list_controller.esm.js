/** @odoo-module */

import {patch} from "@web/core/utils/patch";
import {ListController} from "@web/views/list/list_controller";

patch(ListController.prototype, "web_group_expand.ListController", {
    async expandAllGroups() {
        $("tbody.ui-sortable > tr.o_group_header").each(function (idx, el) {
            if (!$(el).attr("class").includes("o_group_open")) {
                $(el).click();
            }
        });
    },

    async collapseAllGroups() {
        $("tbody.ui-sortable > tr.o_group_header").each(function (idx, el) {
            if ($(el).attr("class").includes("o_group_open")) {
                $(el).click();
            }
        });
    },
});
