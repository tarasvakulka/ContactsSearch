var contacts = [
    {
        id: 1,
        name: 'Ivan Petrov',
        phoneNumber: '+250966666666',
        image: 'https://image.flaticon.com/icons/svg/149/149071.svg'
    }, {
        id: 2,
        name: 'Dasha Melnyk',
        phoneNumber: '+250966344466',
        image: 'https://image.flaticon.com/icons/svg/149/149071.svg'
    }, {
        id: 3,
        name: 'Taras Vakulka',
        phoneNumber: '+250976654433',
        image: 'https://image.flaticon.com/icons/svg/149/149071.svg'
    }, {
        id: 4,
        name: 'Roman Koaval',
        phoneNumber: '+250456784935',
        image: 'https://image.flaticon.com/icons/svg/149/149071.svg'
    }
];
class Contact extends React.Component {
    render() {
        return (
            <li className="contact">
                <img className="contact-image" src={this.props.image} width="60px" height="60px"/>
                <div className="contact-info">
                    <div className="contact-name"> {this.props.name} </div>
                    <div className="contact-number"> {this.props.phoneNumber} </div>
                </div>
            </li>);
    }
}
class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayedContacts: contacts};
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e) {
        var searchQuery = e.target.value.toLowerCase();
        var displayedContacts = contacts.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    }
    render() {
        return(
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                            />;
                        })
                    }
                </ul>
            </div>);
    }
}
ReactDOM.render(
    <ContactsList />,
    document.getElementById("content")
);