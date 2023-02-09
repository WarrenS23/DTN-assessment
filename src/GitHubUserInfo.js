import React, { Component } from 'react'
import axios from 'axios';
import './GitHubUserInfo.css'

class GitHubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {imgUrl: '', name: '', gitHubUrl: ''}
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        axios.interceptors.request.use(
            config => {
                config.headers.Authorization = `Bearer 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`;
                return config
            }
        )
        let response = await axios.get(url)
        let data = response.data;
        this.setState({ imgUrl: data.avatar_url, name: data.name, gitHubUrl: data.html_url})
        // console.log(data);
    }
    render() {
        return (
            <div className='GitHubUserInfo'>
                <h1>Name: {this.state.name}</h1>
                <p>GitHub Profile: <a href={this.state.gitHubUrl} target='_blank'>URL</a></p>
                <img className='GitHubUserInfo-img' src={this.state.imgUrl} />
            </div>
        )
    }
}

export default GitHubUserInfo;