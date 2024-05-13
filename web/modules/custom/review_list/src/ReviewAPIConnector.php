<?php 
namespace Drupal\review_list;

class ReviewAPIConnector { 
  private $client;
  private $query;
  
  public function __construct(\Drupal\Core\Http\ClientFactory $client){
   //   $review_api_config = \Drupal::state()->get(\Drupal\review_list\Form\ReviewAPI::REVIEW_API_CONFIG_PAGE); 
    $api_url = 'https://hacker-news.firebaseio.com/v0/item/';
    $api_key = '';
    $query = ['api_key' => $api_key];
    $this->query = $api_url;
    $this->client = $client->fromOptions(
      [
        'base_uri' => $api_url,
        'query' => $query
      ]
    );
  }
    
  public function discoverArticles($RefNid){
    $node = \Drupal::entityTypeManager()->getStorage('node')->load($RefNid);
    $data =[];
    $article_id = $node->get('field_article_id')->getString();
    $source_url = $this->query.$article_id.'.json';
    try {
      $request = $this->client->get($source_url);
      $results = $request->getbody()->getContents();
      $data = json_decode($results);
    }
    catch(\GuzzleHttp\Exception\RequestException $e){
      watchdog_exception('type review_list', $e, $e->getMessage());
    }
    return $data;
  }
}