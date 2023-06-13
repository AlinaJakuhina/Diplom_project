export const url = "http://localhost:3333";

const send_coupon_url = url + '/sale/send'
const send_order_url = url + '/order/send';


export const send_order = (phone) => {
    fetch(send_order_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(phone)
    })
      .then(res => res.json())
      .then(data => console.log('Request sent', data))
      .catch(error => console.error('Error: ', Error))
  }


export const send_discount_request = (phone) => {
    fetch(send_coupon_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone})
    })
      .then(res => res.json())
      .then(data => console.log('Request sent', data))
      .catch(error => console.error('Error: ', Error))
  }
  