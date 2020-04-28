const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^Load the homepage for sign in$/, async () => {
  await client.url('http://www.automationpractice.com');
   await client.maximizeWindow();
});

Then(/^Click on the "(.*?)" button and login into system through credential$/, async text => {
  await client.click('#header > div.nav > div > div > nav > div.header_user_info > a');
  await client.pause(2000);
  await client.setValue('#email','bindasmady657@gmail.com');
  await client.setValue('#passwd','test@123456');
  await client.click('#SubmitLogin > span');
  await client.pause(2000);
});

  Given(/^Load the homepage$/, async () => {
  await client.url('http://www.automationpractice.com');
  await client.maximizeWindow();
  
});
   When(/^user enter black dress text in search text box and enter$/, async()=>{
	await client.waitForElementVisible('#search_query_top', 1000);
	await client.setValue('#search_query_top','black dress');
	await client.url('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=black+dress&submit_search=');
	await client.pause(2000);
	await client.click('#list > a > i')
   
   });
   Then(/^add first dress in cart$/, async()=> {
	   await client.click('#center_column > ul > li.ajax_block_product.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line.col-xs-12 > div > div > div.right-block.col-xs-4.col-xs-12.col-md-4 > div > div.button-container.col-xs-7.col-md-12 > a.button.ajax_add_to_cart_button.btn.btn-default');
	   await client.pause(2000);
	   await client.click('.cross');
	   await client.pause(2000);
   });
   Then(/^add second dress in cart$/, async()=>{
		await client.click('#center_column > ul > li:nth-child(2) > div > div > div.right-block.col-xs-4.col-xs-12.col-md-4 > div > div.button-container.col-xs-7.col-md-12 > a.button.ajax_add_to_cart_button.btn.btn-default');
	  	await client.pause(2000);
	   await client.click('.cross');
	   await client.pause(2000);
   });	
  Then(/^search for Cart and click on  Proceed to checkout and navigate to shopping cart page$/, async()=>{
	  await client.click('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a');
	  
  });
   Then(/^update the quantity of second dress to 2$/, async()=>{
	  await client.pause(2000);
	  await client.click('#cart_quantity_up_4_16_0_0 > span');
	  await client.pause(2000);
  });
   Then(/^Remove the first dress from Cart$/, async()=>{
	  await client.pause(2000);
	  await client.click('#cart_quantity_down_5_19_0_0 > span > i');
	  await client.pause(2000);
  });
    Then(/^Click on Proceed to checkout button and navigate to next page$/, async()=>{
	await client.click('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');
	await client.pause(2000);
  });