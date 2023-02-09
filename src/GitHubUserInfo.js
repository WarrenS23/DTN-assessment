import React, { Component } from 'react'
import axios from 'axios';

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
        console.log(data);
    }
    render() {
        return (
            <div>
                <h1>Github User: {this.state.name}</h1>
                <p>GitHub Profile: <a href={this.state.gitHubUrl} target='_blank'>URL</a></p>
                <img src={this.state.imgUrl} />

            </div>
        )
    }
}

export default GitHubUserInfo;