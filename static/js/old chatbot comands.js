//1
if (message.toLowerCase().includes("hi")) {
    response = "Hello! How can I assist you today?";
}
else if (message.toLowerCase().includes("hello")) {
     response = "Hello! How can I assist you today?";}
else if (message.toLowerCase().includes("services")) {
    response = "We offer cleaning, cooking, childcare, and elder care services. Would you like more information on any of these?";
} else if (message.toLowerCase().includes("price")) {
    response = "Please contact us directly for pricing details based on the services you need.";
} else if (message.toLowerCase().includes("maid registration")) {
    response = "To register as a maid, click on the 'Register as maid' button on the homepage.";
} else if (message.toLowerCase().includes("customer registration")) {
    response = "To register as a customer, click on the 'Register as customer' button on the homepage.";
} else if (message.toLowerCase().includes("contact")) {
    response = "You can reach us at contact@maidservice.com or call +123 456 7890. " ;
} else if (message.toLowerCase().includes("login")) {
    response = '<a href="/login">Login</a>';
} else if (message.toLowerCase().includes("register")) {
    response = '<a href="register.html">Register</a>';

} else if (message.toLowerCase().includes("about")) {
    response = '<a href="about_us.html">AboutUs</a>';
}else if (message.toLowerCase().includes("review")) {
    response = '<a href="reviews.html">Review</a>';
} 
else if (message.toLowerCase().includes("register")) {
    response = '<a href="customer.html">Register</a>';
}else if(message.toLowerCase().includes("home")){
    response = '<a href="index.html">Home</a>';
    
}

else {
    response = "I'm sorry, I didn't understand that. Can you please rephrase?";
}




//2nd
if (message.toLowerCase().includes("hi")) {
    response = "Hello! How can I assist you today?";
} else if (message.toLowerCase().includes("hello")) {
    response = "Hello! How can I assist you today?";
} else if (message.toLowerCase().includes("maid")) {
    response = "Looking for a maid? We offer cleaning, cooking, childcare, and elder care services. Would you like to book a maid?";
} else if (message.toLowerCase().includes("book")) {
    response = "To book a maid, you can visit our booking page. Would you like to see available maids?";
} else if (message.toLowerCase().includes("cleaning")) {
    response = "We offer professional cleaning services for homes, offices, and more. Would you like to book a cleaning session?";
} else if (message.toLowerCase().includes("cooking")) {
    response = "We have experienced cooks available for all kinds of cuisines. Would you like to know more about our cooking services?";
} else if (message.toLowerCase().includes("childcare")) {
    response = "We provide qualified childcare services. Would you like to book a nanny?";
} else if (message.toLowerCase().includes("elder care")) {
    response = "Our trained staff offers elder care services. Would you like to know more about it?";
} else if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
    response = "Pricing depends on the service you choose. Please visit our pricing page or contact us for more details.";
} else if (message.toLowerCase().includes("maid registration")) {
    response = "To register as a maid, visit the 'Register as Maid' section on the homepage.";
} else if (message.toLowerCase().includes("customer registration")) {
    response = "To register as a customer, visit the 'Register as Customer' section on the homepage.";
} else if (message.toLowerCase().includes("contact")) {
    response = "You can reach us at contact@maidservice.com or call +123 456 7890.";
} else if (message.toLowerCase().includes("login")) {
    response = '<a href="/login">Login</a>';
} else if (message.toLowerCase().includes("register")) {
    response = '<a href="/register.html">Register</a>';
} else if (message.toLowerCase().includes("about")) {
    response = '<a href="/about_us.html">About Us</a>';
} else if (message.toLowerCase().includes("review")) {
    response = '<a href="/reviews.html">Leave a Review</a>';
} else if (message.toLowerCase().includes("admin")) {
    response = '<a href="/adminDashboard">Admin Dashboard</a>';
} else if (message.toLowerCase().includes("services")) {
    response = '<a href="/services.html">Our Services</a>';
} else if (message.toLowerCase().includes("home")) {
    response = '<a href="/home">Home</a>';
} else if (message.toLowerCase().includes("privacy")) {
    response = '<a href="/privacyPolicy.html">Privacy Policy</a>';
} else if (message.toLowerCase().includes("terms")) {
    response = '<a href="/TermsOfServices.html">Terms of Service</a>';
} else if (message.toLowerCase().includes("booking")) {
    response = "To make a booking, you can go to the booking page by clicking the link below.";
} else if (message.toLowerCase().includes("logout")) {
    response = "You have successfully logged out.";
} else if (message.toLowerCase().includes("confirm booking")) {
    response = "Your booking has been confirmed! You will receive a notification soon.";
} else if (message.toLowerCase().includes("cancel booking")) {
    response = "To cancel a booking, please contact us directly at contact@maidservice.com or call +123 456 7890.";
} else if (message.toLowerCase().includes("view maid profiles")) {
    response = "You can view available maid profiles on our 'Maid Profiles' page.";
} else if (message.toLowerCase().includes("find maid")) {
    response = "To find a maid, please visit our booking page where you can choose maids based on your service requirements.";
} else if (message.toLowerCase().includes("register maid")) {
    response = "To register as a maid, please visit the 'Register as Maid' page.";
} else if (message.toLowerCase().includes("feedback")) {
    response = "We value your feedback! You can submit your review on the 'Review' page.";
} else if (message.toLowerCase().includes("availability")) {
    response = "You can check the availability of maids on our booking page.";
} else if (message.toLowerCase().includes("special offers")) {
    response = "Check our 'Special Offers' page for discounts and deals!";
} else if (message.toLowerCase().includes("faq")) {
    response = "For frequently asked questions, please visit our FAQ page.";
} else if (message.toLowerCase().includes("terms and conditions")) {
    response = '<a href="/tearmsAndConditionCustomer.html">Terms and Conditions for Customers</a>';
} else if (message.toLowerCase().includes("maid terms")) {
    response = '<a href="/tearmsAndConditionMaid.html">Terms and Conditions for Maids</a>';
} else if (message.toLowerCase().includes("help")) {
    response = "How can I assist you? You can ask about services, bookings, or general inquiries.";
} else {
    response = "I'm sorry, I didn't understand that. Can you please rephrase?";
}


//3rd

// Chatbot response logic
function handleUserMessage(message) {
    let response;

    if (message.toLowerCase().includes("hi") || message.toLowerCase().includes("hello") || message.toLowerCase().includes("hey")) {
        response = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes("how are you")) {
        response = "I'm doing great, thanks for asking! How can I assist you today?";
    } else if (message.toLowerCase().includes("help")) {
        response = "How can I assist you? You can ask about services, bookings, reviews, and more.";
    }
    
    // Services Information
    else if (message.toLowerCase().includes("services")) {
        response = "We offer a range of services like cleaning, cooking, childcare, and elder care. Would you like to know more about any of these services?";
    } else if (message.toLowerCase().includes("cleaning")) {
        response = "We provide professional cleaning services for homes, offices, and more. Would you like to book a cleaning session?";
    } else if (message.toLowerCase().includes("cooking")) {
        response = "Our experienced cooks are available to prepare meals of your choice. Would you like to know more about our cooking services?";
    } else if (message.toLowerCase().includes("childcare")) {
        response = "We offer quality childcare services by trained professionals. Would you like more information?";
    } else if (message.toLowerCase().includes("elder care")) {
        response = "Our trained staff offers elder care services, ensuring safety and comfort for elderly loved ones. Would you like to book elder care services?";
    } else if (message.toLowerCase().includes("maid")) {
        response = "Looking for a maid? We offer services like cleaning, cooking, childcare, and elder care. Would you like to book a maid?";
    }

    // Booking-related Commands
    else if (message.toLowerCase().includes("book")) {
        response = "To book a maid, please visit our booking page. Would you like me to take you there?";
    } else if (message.toLowerCase().includes("find maid")) {
        response = "To find a maid, you can check our maid profiles or visit our booking page to view available maids.";
    } else if (message.toLowerCase().includes("view maid profiles")) {
        response = "You can view available maid profiles on our 'Maid Profiles' page.";
    } else if (message.toLowerCase().includes("availability")) {
        response = "You can check the availability of maids on our booking page.";
    } else if (message.toLowerCase().includes("book cleaning")) {
        response = "You can book cleaning services directly through our booking page. Let me know if you'd like help.";
    } else if (message.toLowerCase().includes("book cooking")) {
        response = "You can book cooking services directly through our booking page. Would you like to proceed?";
    }

    // Pricing and Offers
    else if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
        response = "Pricing depends on the service you choose. Please contact us for more details or visit our pricing page.";
    } else if (message.toLowerCase().includes("special offers")) {
        response = "We have ongoing offers! Check out the 'Special Offers' section on our website for details.";
    }

    // Registration and Login
    else if (message.toLowerCase().includes("login")) {
        response = '<a href="/login">Click here to login</a>';
    } else if (message.toLowerCase().includes("register")) {
        response = '<a href="/register">Click here to register</a>';
    } else if (message.toLowerCase().includes("maid registration")) {
        response = "To register as a maid, visit the 'Register as Maid' section on the homepage.";
    } else if (message.toLowerCase().includes("customer registration")) {
        response = "To register as a customer, visit the 'Register as Customer' section on the homepage.";
    }

    // User Actions and Profile-related Commands
    else if (message.toLowerCase().includes("profile")) {
        response = "To view or update your profile, visit the 'My Profile' section on your dashboard.";
    } else if (message.toLowerCase().includes("edit profile")) {
        response = "You can edit your profile in the 'My Profile' section on the dashboard.";
    } else if (message.toLowerCase().includes("logout")) {
        response = "You have successfully logged out.";
    }

    // Customer Support and Contact
    else if (message.toLowerCase().includes("contact")) {
        response = "You can reach us at contact@maidservice.com or call +123 456 7890.";
    } else if (message.toLowerCase().includes("support")) {
        response = "For support, please contact us at support@maidservice.com or call our helpline at +123 456 7890.";
    } else if (message.toLowerCase().includes("feedback")) {
        response = "We value your feedback! You can submit your review or feedback on the 'Review' page.";
    }

    // Links to Pages and Navigation
    else if (message.toLowerCase().includes("home")) {
        response = '<a href="/home">Click here to go back to Home</a>';
    } else if (message.toLowerCase().includes("about")) {
        response = '<a href="/about_us.html">About Us</a>';
    } else if (message.toLowerCase().includes("reviews")) {
        response = '<a href="/reviews.html">Leave a Review</a>';
    } else if (message.toLowerCase().includes("admin")) {
        response = '<a href="/adminDashboard">Admin Dashboard</a>';
    } else if (message.toLowerCase().includes("privacy")) {
        response = '<a href="/privacyPolicy.html">Privacy Policy</a>';
    } else if (message.toLowerCase().includes("terms")) {
        response = '<a href="/TermsOfServices.html">Terms of Service</a>';
    } else if (message.toLowerCase().includes("faq")) {
        response = "For frequently asked questions, please visit our FAQ page.";
    } else if (message.toLowerCase().includes("special offers")) {
        response = '<a href="/specialOffers.html">Check out our Special Offers</a>';
    }

    // Terms and Conditions
    else if (message.toLowerCase().includes("terms and conditions")) {
        response = '<a href="/tearmsAndConditionCustomer.html">Terms and Conditions for Customers</a>';
    } else if (message.toLowerCase().includes("maid terms")) {
        response = '<a href="/tearmsAndConditionMaid.html">Terms and Conditions for Maids</a>';
    }

    // Booking Confirmation and Cancellation
    else if (message.toLowerCase().includes("confirm booking")) {
        response = "Your booking has been confirmed! You will receive a notification soon.";
    } else if (message.toLowerCase().includes("cancel booking")) {
        response = "To cancel a booking, please contact us directly at contact@maidservice.com or call +123 456 7890.";
    }

    // Admin-Related Commands
    else if (message.toLowerCase().includes("admin dashboard")) {
        response = "To access the admin dashboard, please visit the 'Admin Dashboard' section.";
    }

    // Miscellaneous Commands
    else if (message.toLowerCase().includes("goodbye") || message.toLowerCase().includes("bye")) {
        response = "Goodbye! Have a great day!";
    } else if (message.toLowerCase().includes("thank you")) {
        response = "You're welcome! Let me know if you need any more help.";
    } else {
        response = "I'm sorry, I didn't understand that. Can you please rephrase?";
    }

    return response;
}
