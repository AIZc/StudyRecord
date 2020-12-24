let mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('open', function (err) {
    if (err) console.log(err);
    else {
        console.log('数据库连接成功!');
        //操作数据库,引入模式对象
        let Schema = mongoose.Schema
        //制定进入门口的规则,创建约束对象
        let studentsRule = new Schema({
            stu_id: {
                type: String,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            sex: {
                type: String,
                required: true
            },
            hobby: [String],
            info: Schema.Types.Mixed,
            date: {
                type: Date,
                default: Date.now()
            },
            enable_flag: {
                type: String,
                default: 'Y'
            }
        })
        //告诉保安进入门口的规则,创建模型对象
        let stuModel = mongoose.model('students', studentsRule)
        // CRUD  增删改查
        //新增操作 ---C
        stuModel.create({
            stu_id:'2017105110203',
            name: 'ggw',
            age: 22,
            sex: 'female',
            hobby: ['女','睡觉','吃饭'],
            info: '一个美丽的 男子'
        },function (err,data) {
            if (err) console.log(err);
            else console.log(data);
        })

        //查询 ---R
        /* stuModel.findOne({name:'zhangchao1'},function (err, data) {
              if (err) console.log(err);
              else console.log(data);
          })*/
        /*  stuModel.find({name:'zhangchao'},function (err, data) {
            if (err) console.log(err);
            else console.log(data);
        })*/

        //更新 --U
        /*stuModel.update({name:'雪瑞'},{age:18},function (err,data) {
            if (err) console.log(err);
            else console.log(data);
        })*/
        // 删除 --D
       /* stuModel.deleteMany({name:'ggw'},function (err,data) {
            if (err) console.log(err);
            else console.log(data);
        })*/
    }
})