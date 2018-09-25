import * as React from "react";

export interface IQuestionsAndAnswersProps {
    service: any;
    initialQuestionAnswers: { [index: string]: { question: string, answer: string} };
}

interface IQuestionsAndAnswersState {
    questionAnswers: { [index: string]: { question: string, answer: string} };
}

export default class QuestionsAndAnswers extends React.Component<IQuestionsAndAnswersProps, IQuestionsAndAnswersState> {
    private static readonly MinRows = 5;

    constructor(props: IQuestionsAndAnswersProps) {
        super(props);

        this.state = {
            questionAnswers: props.initialQuestionAnswers || {}
        };
    }
    public render(): JSX.Element {
        return (
            <div>
                <table>
                    {rows}
                </table>
            </div>
        );
    }

    private renderTableRows(): Array<JSX.Element> {
        var rows = [];
        var rowsCount = this.state.questionAnswers && Object.keys(this.state.questionAnswers).length > 5 ? 5 : Object.keys(this.state.questionAnswers).length;

        for (let i=0; i<rowsCount; ++i) {
            let question = this.props.initialQuestionAnswers && this.state.questionAnswers[i].question || "";
            let answer = this.props.initialQuestionAnswers && this.state.questionAnswers[i].answer || "";
            
            rows.push(<tr className="ml-ama-table-row"><td className="ml-ama-table-cell">{question}</td><td className="ml-ama-table-cell">{answer}</td></tr>)
        }

        return rows;
    }
}