<?php

use Drupal\DrupalExtension\Context\MinkContext;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use Behat\Behat\Tester\Exception\PendingException;

class FeatureContext extends MinkContext implements SnippetAcceptingContext {

  /**
   * @Given I am an anonymous user
   */
  public function iAmAnAnonymousUser() {
    // Sine Jekyll doesn't allow login, we just let this pass-through.
  }
  /**
   * @When I visit the homepage
   */
  public function iVisitTheHomepage() {
    $this->getSession()->visit($this->locatePath('/'));
  }
  /**
   * @Then I should have access to the page
   */
  public function iShouldHaveAccessToThePage() {
    $this->assertSession()->statusCodeEquals('200');
  }
  /**
   * @Then I should the text :text under the main content
   */
  public function iShouldTheTextUnderTheMainContent($text) {
    $this->assertElementContains('#post-content', $text);
  }
  /**
   * @Then I should see the author :author
   */
  public function iShouldSeeTheAuthor($author) {
    $this->assertElementContains('.post-author', $author);
  }
}
