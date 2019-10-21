import { SubmitForm, DeleteStatus } from "@/assets/js/common.js";
export const toggle = {
    data() {
        return {

        }
    },
    methods: {
        // 序号重排
        getSort(){
            this.postRequest({url:this.sortUrl,success:()=>{
              this.getTableData()
            }})
        },
        // 获取表格数据
        getTableData() {
            let that = this;
            const loading = that.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.1)',
                target: document.querySelector('.load_table')
                });
            that.postRequest({url:that.getUrl,data:that.tablePrams,success:result =>{
                that.tableData = result.list
                that.totalpage = result.totalRow
                loading.close()
            },fail:err => console.log(err)
            })
        },
        // 获取所有状态
    getStatusOption() {
        let that = this;
        that.postRequest({url:"/api/ts-common/get/dic",data:{code:"4"},success:result =>{
          that.statusOptions = result
        }})
      },
        // 确认增加修改数据
        formSubmit(formName) {
            console.log(1111)
            let that = this;
            let type = that.editType;
            SubmitForm.call(this,{formName,type,addUrl:that.addUrl,editUrl:that.editUrl,submitsuccess:()=>{
            that.getTableData()
            that.formVisible = false}
        })
        },
        //一页显示条数改变时
        handleSizeChange(val) {
            this.tablePrams.pageSize = val
            this.getTableData()

          },
          //当前页改变时
          handleCurrentChange(val) {
            this.tablePrams.pageNumber = val
            this.getTableData()
          },
        // 取消增加修改
        formCancel() {
            this.formVisible = false;
        },
        // 删除表格某一行数据
        onDelete(index, row) {
            let that = this;
            let data = { id: row.id };
            let deleteUrl = that.deleteUrl
            DeleteStatus.call(this,{deleteUrl,data,deletesuccess:()=>{
                that.getTableData()
            }})
        }
    }
}
