import * as React from "react";
import Loader from "react-loader-spinner";

export interface IAppProps {
    viewModel: any;
}

enum ViewState {
    Loading,
    Failed,
    Loaded
}

interface IAppState {
    viewState: ViewState;
}

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            viewState: ViewState.Loading
        };
    }

    public render(): JSX.Element {
        if (this.state.viewState === ViewState.Loading) {
            return (<Loader 
                type="Puff"
                color="#00BFFF"
                height="100"	
                width="100"
            />);
        }
        return <div />;
    }
}
