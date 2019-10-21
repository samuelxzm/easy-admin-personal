import { SubmitForm, DeleteStatus } from "@/assets/js/common.js";
export const toggle = {
    data() {
        return {

        }
    },

    methods: {
        // 获取表格数据
        getTableData() {
            let that = this;
            that.tableLoading = true;
            that
                .postRequest(that.getUrl)
                .then(result => {
                    that.tableLoading = false;
                    that.tableData = result;
                });
        },
        // 确认增加修改数据
        formSubmit(formName) {
            let that = this;
            let type = this.editType;
            SubmitForm(
                this,
                formName,
                formName,
                type,
                that.addUrl,
                that.changeUrl,
                function () {
                    that.getTableData();
                    that.formVisible = false;
                }
            );
        },
        // 取消增加修改
        formCancel() {
            this.moduleFormVisible = false;
        },
        // 删除表格某一行数据
        onDelete(index, row) {
            let that = this;
            let data = { id: row.id };
            DeleteStatus(this, that.deleteUrl, data, function () {
                that.getTableData();
            });
        }
    }
}
