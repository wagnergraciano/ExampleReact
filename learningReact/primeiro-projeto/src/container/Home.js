import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component{

    homeCardReleases = {
        title: 'Releases',
        text: 'Menage releases',
        link: '/releases',
        action: () => alert('Releases cliecked')
    }
    homeCardBackLog = {
        title: 'BackLog',
        text: 'Menage BackLog',
        link: '/backlog',
        action: () => alert('BackLog cliecked')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Menage Sprints',
        link: '/sprints',
        action: () => alert('Sprints cliecked')
    }

    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardReleases.title}
                            text={this.homeCardReleases.text}
                            link={this.homeCardReleases.link}
                            action={this.homeCardReleases.action} />
                    <HomeCard {...this.homeCardBackLog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        );
    }
}