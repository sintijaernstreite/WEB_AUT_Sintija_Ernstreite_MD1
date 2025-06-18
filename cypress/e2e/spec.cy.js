import { SelectablePage } from "../pageObjects/SelectablePage";
import { SelectableResultsPage } from "../pageObjects/selectableResultsPage";
describe('template spec', () => {
  beforeEach(() => {
      SelectablePage.visit();
    });
  it('passes', () => {
    SelectablePage.gridTab().click();

    SelectablePage.gridItems("Two").click();
    SelectablePage.gridItems("Four").click();
    SelectablePage.gridItems("Six").click();
    SelectablePage.gridItems("Eight").click(); 

    SelectableResultsPage.gridItemIsActive("Two");
    SelectableResultsPage.gridItemIsActive("Four");
    SelectableResultsPage.gridItemIsActive("Six");
    SelectableResultsPage.gridItemIsActive("Eight");


    SelectableResultsPage.gridItemIsNotActive("One");
    SelectableResultsPage.gridItemIsNotActive("Three");
    SelectableResultsPage.gridItemIsNotActive("Five");
    SelectableResultsPage.gridItemIsNotActive("Seven");
    SelectableResultsPage.gridItemIsNotActive("Nine");
  })  
})  


