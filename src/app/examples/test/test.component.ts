import { Component, OnInit, Renderer2 } from "@angular/core";
import questions from "./questions.json";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class testComponent implements OnInit {
  focus: any;
  focus1: any;
  currentSection = "details";
  userDetails: any = {}; // Store user details

  constructor(private renderer: Renderer2) {}

  questions: any[] = questions.questions;
  currentPage = 1;
  questionsPerPage = 10;
  selectedAnswers: { [key: string]: string }[] = [];
  totalPages: number = 0;
  showSubmitButton = false;
  questionsToDisplay: any[] = [];

  ngOnInit() {
    this.updateQuestionsToDisplay();
    this.totalPages = Math.ceil(this.questions.length / this.questionsPerPage);
    this.initializeSelectedAnswers();
    this.updateShowSubmitButton();
  }

  submitDetails() {
    console.log("User details submitted:", this.userDetails);
    this.currentSection = "test";
  }

  initializeSelectedAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      this.selectedAnswers[i] = {};
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateShowSubmitButton();
      this.updateQuestionsToDisplay();
      this.scrollToTop();
    }
  }

  updateShowSubmitButton() {
    this.showSubmitButton = this.currentPage === this.totalPages;
  }

  updateQuestionsToDisplay() {
    const startIndex = (this.currentPage - 1) * this.questionsPerPage;
    const endIndex = startIndex + this.questionsPerPage;
    this.questionsToDisplay = this.questions.slice(startIndex, endIndex);
  }

  scrollToTop() {
    this.renderer.setProperty(document.documentElement, "scrollTop", 0);
  }

  submitAnswers() {
    console.log("Selected Answers:", this.selectedAnswers);
    this.currentSection = "thanks";
  }
}
