<?php

namespace App\Service;

use Stripe\Checkout\Session;
use Stripe\Stripe;

class StripeService
{
    public function __construct(private string $stripeSecretKey)
    {
        Stripe::setApiKey($this->stripeSecretKey);
    }

    public function createCheckoutSession(array $params): Session
    {
        return Session::create($params);
    }
}
