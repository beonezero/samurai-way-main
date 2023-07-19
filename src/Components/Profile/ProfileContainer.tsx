import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusProfile, getUserProfile, updateStatusProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "29327"
        }
        this.props.getUserProfile(userId)
        this.props.getStatusProfile(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    //WithAuthRedirect
)(ProfileContainer)
