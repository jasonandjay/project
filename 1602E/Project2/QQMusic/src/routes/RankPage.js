import React from 'react';
import { connect } from 'dva';
import { NavLink } from "dva/router"
import styles from "./RankPage.scss"
class Rank extends React.PureComponent {
    componentDidMount() {
        this.props.getRank();
    }
    render() {
        // console.log(this.props.topList)
        let { topList } = this.props;
        return <NavLink className={styles.wrap} to="/detail">
            {
                topList && topList.map((item, index) => {
                    return <dl key={index}>
                        <dt>
                            <img src={item.picUrl} alt="" />
                        </dt>
                        <dd>
                            <p>{item.topTitle}</p>
                            <ol>
                                {item.songList.map((ite, ind) => {
                                    return <li key={ind}>{ite.songname}-{ite.singername}</li>
                                })
                                }
                            </ol>
                        </dd>
                    </dl>
                })
            }
        </NavLink>
    }
}


const mapStateToProps = (state) => {
    return { ...state.rank }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRank: () => {
            dispatch({
                type: 'rank/getRank'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank);
