import './css/style.css'

import React from 'react';
import ReactDOM from 'react-dom';

import ReviewHeader from './components/header.js'
import ReviewMain from './components/main.js'
import ReviewFooter from './components/footer.js'

class Reviewspost extends React.Component {

    constructor () {
        super();

        this.state = {
            reviewAllStart : [
                {name: 'Mister React', description: 'Hello World!', time: '7.06.2019, 11:40:31'}
            ],
            reviewNewName: '',
            reviewNewDes: '',
            reviewNewTime: '',
        }
    }



    add(value) {
        const reviewAllStart = this.state.reviewAllStart;
        const dateCom =
               new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear() + ", " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

         if(this.state.reviewNewName == '' || this.state.reviewNewDes == '') {
             alert('Вы заполнили не все поля!');
         } else {
             reviewAllStart.push({
                 name: this.state.reviewNewName,
                 description: this.state.reviewNewDes,
                 time: dateCom,
             });
             this.setState({reviewAllStart,
                            reviewNewName: '',
                            reviewNewDes: '',
                            reviewNewTime: ''
             });
             localStorage.setItem('rewiews', JSON.stringify(this.state.reviewAllStart));
         }

    }

    removeReview(i) {
        const reviewAllStart = this.state.reviewAllStart;
        reviewAllStart.splice(i, 1);
        this.setState({reviewAllStart});
        localStorage.setItem('rewiews', JSON.stringify(this.state.reviewAllStart));
    }

    componentWillMount() {
        if (localStorage.getItem('rewiews') !== null) {
            this.setState({
                reviewAllStart: JSON.parse(localStorage.getItem('rewiews'))
            })
        }
    }

    render() {
        return (
            <div className="block">
                <div className="comment-published-block-container">
                    {
                        this.state.reviewAllStart.map((review, i) => {
                            return (
                                <div key={i}
                                     className="comment-published-block">
                                    <ReviewHeader
                                        key={i}
                                        name={review.name}
                                        removeReview={this.removeReview.bind(this, i)}
                                    />
                                    <ReviewMain
                                        description={review.description}
                                    />
                                    <ReviewFooter
                                        time={review.time}
                                    />

                                    <span className="circle"></span>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="line" />
                <div className="comment-block">
                    <h2 className="title">Напишите свой отзыв:</h2>
                    <input
                        type="text"
                        name='review'
                        className="comment-name"
                        placeholder="Ваше имя:"
                        required
                        value={this.state.reviewNewName}
                        onChange={ev => {
                            this.setState({reviewNewName: ev.target.value});
                        }}
                    />
                    <textarea
                        ame='review'
                        className="comment"
                        placeholder="Ваш комментарий"
                        required
                        value={this.state.reviewNewDes}
                        onChange={ev => {
                            this.setState({reviewNewDes: ev.target.value});
                        }}
                    >
                    </textarea>
                    <input
                        type="submit"
                        name='review'
                        className="comment-btn"
                        value="Отправть"
                        onClick={ev => {
                            this.add();
                        }}
                    />
                </div>
            </div>
        )
    }


};

ReactDOM.render(
    <Reviewspost />,
    document.querySelector('.container')
);
