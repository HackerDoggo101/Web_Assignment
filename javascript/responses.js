function botResponse(input) {
    const chatList = [
        "location",
        "product",
        "price",
        "delivery",
        "feedback",
        "news and promotions",
        "rewards",
        "coupon",
        "membership",
        "hi", "hello",
        "how are you",
        "nice to meet you",
        "good morning",
        "bye",
        "ok", "okay",
        "thank you",
        "help"
    ];

    const replyList = [
        "You can find our physical shop from <a href='/html/location.html' class='chat-link'>here</a>.",
        "We are selling <a href='/html/menu_cakes.html' class='chat-link'><strong>cakes</strong></a>, <a href='/html/menu_breads.html' class='chat-link'><strong>breads</strong></a>, <a href='/html/menu_pastries.html' class='chat-link'><strong>pastries</strong></a>, <a href='/html/menu_cookies.html' class='chat-link'><strong>cookies</strong></a>.",
        "Our products' price range from RM2 to RM10",
        "Check out more delivery information <a href='/html/delivery.html' class='chat-link'>here</a>.",
        "We would be much appreciate your feedback. Click <a href='/html/customer_feedback.html' class='chat-link'>here</a> to submit your form.",
        "We are continuously updating news and promotions.Click <a href='/html/news&promotions.html' class='chat-link'>here</a> to check it out.",
        "Click <a href='/html/rewards.html' class='chat-link'>here</a> to check it out!",
        "Check <a href='/html/coupon.html' class='chat-link'>here</a> to use your coupon code in our physical store.",
        "Great news! We are giving out free classic membership. Click<a href='/html/member_registration.html' class='chat-link'> here </a>to register now!",
        "Hello :>", "Hey there :P",
        "I'm energized to help you :D",
        "Nice to meet you too! Is there anything I could help?",
        "Morning! How are you?",
        "Goodbye! Have a nice day! ^o^",
        ":P", "^o^",
        "You are welcome! It is our pleasure to help you.",
        "You can search for:<br />location<br />product<br />price<br />delivery<br/>feedback<br/>news and promotions<br/>rewards<br/>coupon<br/>membership"
    ];

    // make input to lower case so that input is not case sensitive
    var inputLower = input.toLowerCase();

    for (var i = 0; i < chatList.length; i++) {
        console.log(inputLower == chatList[i]);
        if (inputLower == chatList[i])
            return replyList[i];
    }

    return "Sorry! I cannot understand your words. Reply '<b>help</b>' " +
    "to get the list of available keywords or you may find answers " + 
    "at <a href='/html/faq.html' class='chat-link'>here</a>.";
}