import BaseModel from './../../../engine/BaseModel';

class Article extends BaseModel {
    constructor () {
        super();

        this.model = this._connection.define('article', {
            title: {
                type: this._mapper.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [0, 255],
                        msg: 'Length Error'
                    }
                }
            },
            content: {
                type: this._mapper.TEXT
            },
            author_id: this._mapper.INTEGER
        });

        this._connection.sync({
            force: true
        })
            .then(() => {
                console.log('Article synchronized');

                this.model.create({
                    title: 'Demo',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt error facilis harum libero omnis quas veniam. Asperiores consequuntur eos et eveniet officiis optio quod similique. Ex iste magni nostrum officia.',
                    author_id: 1
                }).catch((err) => {
                    console.log(err);
                });
            })
            .catch((err) => {
                console.log(`Database Error: ${err}`);
            });
    }
}

module.exports = Article;