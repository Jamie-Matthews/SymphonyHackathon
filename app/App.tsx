import * as React from "react";
import { HashLoader } from "react-spinners";

export interface IAppProps {
    viewModel: any;
}

enum ViewState {
    Loading,
    Loaded,
    Failed
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

        this.initialize();
    }

    public render(): JSX.Element {
        let content;

        if (this.state.viewState === ViewState.Loading) {
            content = <HashLoader 
                sizeUnit={"px"}
                size={150}
                color={'#000000'}
                loading={true}
            />;
        } else {
            content = <span>The App</span>;
        }

        return (
            <div className="ml-ama-wrapper">
                {content}
            </div>
        );
    }

    private async initialize(): Promise<void> {
        await this.authenticateAsync();

        this.setState({
            viewState: ViewState.Loaded
        });
    }

    private async authenticateAsync(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve();
            },
            1500);
        });
    }
}
