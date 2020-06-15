const BASE_URL = "https://www.monstercat.com/";
describe("Get the world record in accessing Speed Run by CloudNone and playing it", () => {
   it("Should get the world record!!!!!11", () => {
      cy.visit(BASE_URL);

      cy.get("body > header > div.container.player > div.col-xs-hidden.col-md-visible.global-search > form > input[type=text]").type("Speed Run");
      cy.get("body > header > div.container.player > div.col-xs-hidden.col-md-visible.global-search > form > button > i").click();
      cy.get("body > section > div > div.panel.panel--mobile > div > table > tbody > tr > td.shrink > button > i").click();
   });
});
