import { SubmitForm, guid, DeleteStatus } from "@/assets/js/common.js";
export const tableMixin = {
  data() {
  },
  methods: {
    // 搜索
    getSearch() {
      this.postRequest({
        url: this.searchUrl,
        data: this.formInline,
        success: result => {
          this.tableData = result;
        }
      })
    },
    // 获取表格数据
    getTableData() {
      const loading = this.$loading({
        lock: true,
        text: '加载中',
        background: 'rgba(0, 0, 0, 0.1)',
        target: document.querySelector('.el-table')
      });
      this.postRequest({
        url: this.tableDataUrl,
        data: this.tableDataParams,
        success: result => {
          this.totalPage = result.totalRow;
          this.tableData = result.list;
          loading.close()
        },
        fail: err => {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      })
    },
    //页码大小变动是触发的事件
    handleSizeChange(val) {
      this.tableDataParams.pageSize = val;
      this.getTableData();
    },
    // 当前页变动是触发的事件
    handleCurrentChange(val) {
      this.tableDataParams.pageNumber = val;
      this.getTableData();
    },
    // 删除表格中的数据
    handleDelete(index, data) {
      DeleteStatus.call(this, {
        deleteUrl: this.deleteUrl,
        data: {
          id: data.id
        },
        deletesuccess: () => {
          this.getTableData();
        }
      })
    },
    // 确认添加或者更新
    onChecked(formName) {
      SubmitForm.call(this, {
        formName,
        type: this.editType,
        addUrl: this.addUrl,
        editUrl: this.editUrl,
        submitsuccess: () => {
          this.getTableData();
          this.dialogAddVisible = false;
        }
      })
    },
    // 取消
    onCancel() {
      this.dialogAddVisible = false;
    }
  }
}
