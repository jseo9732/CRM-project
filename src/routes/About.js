import { Component } from '../core/index.js';

import Store from '../store/myValley.js';
import Involve from '../store/involvedValley.js';

import DetailMyValley from '../components/DetailMyValley.js';
import ViewMember from '../components/ViewMember.js';

import { getInvolvedData } from '../dispatch/index.js';
import { getData } from '../dispatch/index.js';
import { uniqBy } from 'lodash';
import Confetti from '../components/Confetti.js';

export default class About extends Component {
    render() {
        const detailMyValleyel = new DetailMyValley().el;
        this.el.innerHTML = /*html*/ `
            <div class="about__banner--wrapper"></div>
            <div class="about__banner--helper">✨연관 계곡들 보기✨</div>
            <div class="view__banner--wrapper"></div>
        `;
        this.el.classList.add('about__banner--container');

        const getInvolvedDatas = async () => {
            Involve.state.valleyList = [];
            const _id = history.state.id;
            await getInvolvedData(_id, 'name', Store.state.name);
            await getInvolvedData(_id, 'nickname', Store.state.nickname);
            await getInvolvedData(_id, 'province', Store.state.province);
            await getInvolvedData(_id, 'city', Store.state.city);
        };

        const inputEl = this.el.querySelector('.view__banner--wrapper');
        const historyIsValid = async () => {
            const query = history.state.id;
            await getData(query);
            this.el.querySelector('.about__banner--wrapper').append(detailMyValleyel);
            await getInvolvedDatas();
            const newArr = [...Involve.state.valleyList];
            Involve.state.valleyList = uniqBy(newArr, 'id');
            inputEl.append(...Involve.state.valleyList.map((valley) => new ViewMember(valley).el));
            this.el.append(new Confetti().el);
        };

        if (history.state.id !== undefined) {
            historyIsValid();
        } else {
            alert('잘못된 접근입니다.');
        }
    }
}