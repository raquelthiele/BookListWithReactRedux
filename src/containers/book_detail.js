import React, { Component} from 'react';
import { connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Selecione um livro para começar.</div>
    }
    return (
      <div>
        <h3> Detalhes do:</h3>
        <div>Título: {this.props.book.title}</div>
        <div>Quantidade de Páginas: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps) (BookDetail);