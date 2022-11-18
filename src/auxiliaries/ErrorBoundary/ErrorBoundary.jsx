import { 
    Component,
    } from 'react';
    import { 
    Style,
    Title, 
    Text, 
    Button,
    } from './components';

    class ErrorBoundary extends Component {

    constructor(props){
        super(props);

        this.state = {
        hasError: false,
        stack: null,
        errorMessage: null,
        };

        this.title = 'Error';

    }

    static getDerivedStateFromError(error){
        return { 
        hasError: true, 
        stack: error.stack, 
        message: error.message,
        };
    }
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    reload() {
        return window.location.reload();
    }

    render() {

        if(this.state.hasError){
        return (
            <Style>
            <Title>
                { this.props.title }
            </Title>
            <Text>
                Smth go wrong
            </Text>
            <Button onClick = {this.reload}>
                Reload page
            </Button>
                
            </Style>
        );
        }

        return this.props.children;
        
    }
    }

    export default ErrorBoundary;