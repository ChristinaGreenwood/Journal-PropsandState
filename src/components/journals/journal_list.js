import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";

const rawJournalData = [
  { title: "Post One", content: "Post Content", status: "Draft" },
  { title: "Post Two", content: "Post Content", status: "Published" },
  { title: "Post Three", content: "Post Content", status: "Published" },
  { title: "Post Four", content: "Post Content", status: "Published" },
];

// class Component
export default class JournalList extends Component {
  constructor(props) {
    super();

    this.state = {
      journalData: rawJournalData,
      greeting: "Hey there",
      isOpen: true,
    };
    this.clearEntries = this.clearEntries.bind(this); // this is needed for constuctors
    this.showAllEntries = this.showAllEntries.bind(this); // this is needed for constuctors
    this.toggleStatus = this.toggleStatus.bind(this); // this is needed for constuctors
  }

  clearEntries() {
    this.setState({ journalData: [], isOpen: false });
  }

  showAllEntries() {
    this.setState({ journalData: rawJournalData, isOpen: true });
  }

  toggleStatus() {
    if (this.state.isOpen) {
      this.setState({ journalData: [], isOpen: false });
    } else {
      this.setState({ journalData: rawJournalData, isOpen: true });
    }
  }

  render() {
    const journalEntries = this.state.journalData.map((journalEntry) => {
      return (
        <div key={journalEntry.title}>
          <JournalEntry
            title={journalEntry.title}
            content={journalEntry.content}
          />
        </div>
      );
    });

    return (
      <div className='journal-list'>
        <h2>{this.props.heading}</h2>
        {journalEntries}

        <div className='btn-wrapper'>
          <button className='btn' onClick={this.clearEntries}>
            Clear Journal Entries
          </button>
          <button className='btn' onClick={this.showAllEntries}>
            Show All Entries
          </button>
          <button className='btn' onClick={this.toggleStatus}>
            Toggle Entries + -
          </button>
        </div>
      </div>
    );
  }
}
