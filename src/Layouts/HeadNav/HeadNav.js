import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import './HeadNav.less';
import {Link} from 'react-router-dom';
export default class HeadNav extends Component {
    constructor(props){
        super(props);
        var location=this.props.location.pathname.split('/');
        var currentName=location[location.length-1]?location[location.length-1]:'home'
        this.state = {
            current: currentName,
        }
    }
    handleClick=(e)=>{
        this.setState({current:e.key});
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="smile" className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="home">
                                <Link  to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link  to="/AboutMe/AboutMe">AboutMe</Link>
                            </Menu.Item>
                            <Menu.Item key="music">
                                <Link  to="/Music/Music">Music</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">Article</Link>
                            </Menu.Item>
                            <Menu.Item key="todo" >
                                <Link to="/TodoList/todo">Todo</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}
