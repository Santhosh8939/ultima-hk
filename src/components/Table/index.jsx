import React from 'react';
import './styles.css';

function Table({
  tableType
}) { 
    
  let output;

  switch (tableType){
    default:
      output = '';
      break;
    case "jockey":
      output = (
        <div className="container relative my-4">
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-center border border-slate-400'>No. of admissions reserved</th>	
                <th className='text-center border border-slate-400'>No. of admissions paid by Client</th>
                <th className='text-center border border-slate-400'>No. of free admissions received</th>
              </tr>           
              </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>1</td>	
                <td className='border border-slate-400'>1</td>
                <td className='border border-slate-400'>0</td>  
              </tr>
              <tr>
                <td className='border border-slate-400'>2</td>	
                <td className='border border-slate-400'>2</td>
                <td className='border border-slate-400'>0</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>3</td>	
                <td className='border border-slate-400'>2</td>
                <td className='border border-slate-400'>1</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>4</td>	
                <td className='border border-slate-400'>2</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>5</td>	
                <td className='border border-slate-400'>3</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>6</td>	
                <td className='border border-slate-400'>4</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>7</td>	
                <td className='border border-slate-400'>5</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>8</td>	
                <td className='border border-slate-400'>6</td>
                <td className='border border-slate-400'>2</td>                
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "michelin2":
      output = (
        <div className="container relative my-4">
          <table className="table-fixed border-collapse border border-slate-400">
            <tbody>
              <tr>
                <td className='border border-slate-400'>Ami</td>
                <td className='border border-slate-400'>MICHELIN Guide Selected (Restaurant) </td>
                <td className='border border-slate-400'>
                  <sup>*</sup>Tasting Dinner Menus are at HK$1,288+10% (6 courses) or HK$1,888+10% (8 courses) per person <ol className='ml-10 list-decimal'>
                    <li>Promotion period: January 1 to December 31, 2023</li>
                    <li>Blackout dates: January 1, February 14, May 14, June 18, December 24-26 and 31, 2023.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Amber</td>
                <td className='border border-slate-400'>2 Stars</td>
                <td className='border border-slate-400'>
                  <ol className='ml-10 list-disc'>
                    <li>Complimentary glass of house Champagne or non-alcoholic beverage (one glass per guest) upon arrival</li>
                    <li>Complimentary Souvenir menu and Amberlicious Chocolate for every 2 diners ordering 6-course lunch or 8-course dinner</li>
                    <li>Complimentary Amber Signature Infinity Birthday Cake, Amber Birthday Card, Souvenir menu and Amberlicious Chocolate when mention of birthday celebration during the reservation</li>
                  </ol>
                  <ol className='ml-10 list-decimal'>
                    <li>Promotion period: January 1 to December 31, 2023</li>
                    <li>Offers do not apply on special events and do not apply to Private Rooms by Amber.</li>
                    <li>Blackout dates: January 1-2, February 14, April 7-10, May 14, June 18, December 23-26 and 30-31, 2023. </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Anduc0u333 </td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <ol className='ml-10 list-disc'>
                    <li>Complimentary Welcome Drink</li>
                    <li>Complimentary take-away gift</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Arbor</td>
                <td className='border border-slate-400'>2 stars</td>
                <td className='border border-slate-400'>
                  <sup>*</sup>Full Arbor Experience Tasting Dinner is at HK$1,988+10% per person <ol className='ml-10 list-decimal'>
                    <li>Promotion period: January 1 to December 31, 2023</li>
                    <li>Blackout dates: January 1, February 14, May 14, June 18, December 24-26 and 31, 2023.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Epure</td>
                <td className='border border-slate-400'>1 star</td>
                <td className='border border-slate-400'>
                  <ol className='ml-10 list-disc'>
                    <li>Buy three get one free on Tasting Dinner Menus</li>
                  </ol>
                  <ol className='ml-10 list-decimal'>
                    <li>Promotion period: January 1 to December 31, 2023</li>
                    <li>Blackout dates: January 1, February 14, May 14, June 18, December 24-26 and 31, 2023.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Hansik Goo</td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <ol className='ml-10 list-disc'>
                    <li>One glass of welcome drink per guest for bookings of 4 persons or above at main dining room</li>
                    <li>One complimentary bottle of Champagne for private dining room bookings</li>
                  </ol>
                  <ol className='ml-10 list-decimal'>
                    <li>Promotion period: January 1 to December 31, 2023</li>
                    <li>Minimum charge for private dining room applies: HK$16,000 +10%</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Whey</td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <ol className='ml-10 list-disc'>
                    <li>One glass of welcome drink per guest for bookings of 4 persons or above at main dining room</li>
                    <li>One complimentary bottle of Champagne for private dining room bookings</li>
                  </ol>
                  <ol className='ml-10 list-decimal'>
                    <li> Promotion period: January 1 to December 31, 2023</li>
                    <li>Minimum charge for private dining room applies: Mon '96 Thu: HK$20,000 +10%; Fri '96 Sun: HK$22,000 +10%</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "michelin1":
      output = (
        <div className="container relative my-4">
          <table className="table-fixed border-collapse border border-slate-400">
            <tbody>
              <tr>
                <td className='border border-slate-400'>Arbor</td>
                <td className='border border-slate-400'>2 Stars</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege</u>
                  <br/> i. Reservation to be made at least 14 days in advance. <br/> ii. Cancellation Policy applies: Non-refundable deposit of HKD200 per guest. <br/> iii. Reservations up to 4 persons. <br/> iv. Change of reservation date is allowed only once with 7 days advance notification.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Anduc0u333 </td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege </u>
                  <br/>i. Availability is subject to limited quota. <br/>ii. Reservations to be made at least 2 days in advance <br/> iii. Non-refundable deposit of HKD1,000 per guest is required upon reservation.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>B'e2tard</td>
                <td className='border border-slate-400'>MICHELIN Guide Selected (Restaurant)</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege </u>
                  <br/>i. Reservations up to 4 persons. <br/> ii. Reservation to be made at least 30 days in advance <br/> iii. Deposit: HKD500 per guest upon reservation <br/> iv. Deposit cannot be transferred to another date or refund if guests would like to cancel the booking due to personal reasons. B'e2tard can only reschedule your booking or refund the deposit only if we cannot provide a service, such as due to government restriction or any ad hoc maintenance. <br/> v. Any reduction of number of guests require 24 hours'92 notice or the paid deposit per cancelled guest (HKD500) will be forfeited <br/> vi. Require to order special menu on festive days such as Valentine'92s Day and Christmas
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Caprice</td>
                <td className='border border-slate-400'>3 Stars</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege</u>
                  <br/> i. Reservation to be made at least 14 days in advance. <br/> ii. Cancellation Policy applies: Non-refundable deposit of HKD200 per guest. <br/> iii. Reservations up to 4 persons. <br/> iv. Change of reservation date is allowed only once with 7 days advance notification. <br/> v. Restaurant is closed on Mondays.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>CHAAT</td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege</u>
                  <br/> i. Reservations must be made 7 working days before the 1st of each month for all reservations in the month after (e.g., Mar 23 for May'92s reservation). <br/> ii. Reservations up to 4 persons. <br/> iii. Change of reservation date will consider as forfeiting the booking
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Hanare</td>
                <td className='border border-slate-400'>MICHELIN Guide Selected (Restaurant)</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privileges</u>
                  <br/> i. Reservations must be made at least 30 days in advance. <br/> ii. Reservations up to 4 persons.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Lung King Heen</td>
                <td className='border border-slate-400'>2 Stars</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privileges</u>
                  <br/> i. Reservation has to be made at least 7 days in advance for guaranteed table <br/> ii. Reservation to be made for up to 4 pax per table. <br/> iii. Availability is subject to limited quota.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Sushi Saito</td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege</u>
                  <br/> i. Reservations must be made at least 30 days in advance. <br/> ii. Reservations up to 4 persons shall be made by members through the Citibank Concierge who will contact the restaurant to place the reservation. <br/> iii. For date change, non-refundable deposit is forfeited while an additional 50% non-refundable deposit is required for a new booking date. <br/> iv. In case of any no show, date change, cancellation or reduce number of guests within 72 hours of booking date, 100% penalty (full price of menu) will be charged. <br/> v. Late Arrival Reminder to guests: Guest whom are late for more than 15 minutes, certain courses will be skipped. Guests whom are late for 1 hour or more, there will be no service and the paid deposit will be forfeited <br/> vi. Food allergies or dietary restrictions must be mentioned ahead during the reservation time.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Sushi Wadatsumi</td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege</u>
                  <br/> i. Reservations must be made 7 working days before the 1st of each month for all reservations in the month after <br/> ii. Availability is subject to limited quota. <br/> iii. Any reservations received after the stated timeline or reservations of larger party size, restaurant will review availability and offer priority based on their seats availability <br/> iv. Credit Card Guarantee is required upon reservation; for bookings of 5 persons or above, HKD500 deposit per person is required upon reservation <br/> v. For date change, non-refundable deposit is forfeited while an additional 50% non-refundable deposit is required for a new booking date.
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>T'92ang Court</td>
                <td className='border border-slate-400'>3 Stars</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privilege</u>
                  <br/> i. Reservations has to be made at least 3 days in advance <br/> ii. Reservations up to 4 persons
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Takumi</td>
                <td className='border border-slate-400'>1 Star</td>
                <td className='border border-slate-400'><u>- Reservation privileges</u><br/>
                  i.	Reservations must be made at least 14 days in advance.<br/>
                            ii.	Restaurant is closed on Sundays.<br/>
        iii.	Availability is subject to limited quota.</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Tin Lung Heen</td>
                <td className='border border-slate-400'>2 Stars</td>
                <td className='border border-slate-400'>
                  <u>- Reservation privileges</u><br/>
                    i.	Reservations must be made at least 14 days in advance.<br/>
                    ii.	Reservations up to 4 persons.</td>
                </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "hkfootballclub":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <td width="20%" rowspan="2" className='text-center border border-slate-400'></td>
                <td colspan="3" className='text-center border border-slate-400'>Number of guests permitted:</td>
              </tr>
              <tr>
                <td width="15%" className='text-center border border-slate-400'>At all times</td>
                <td width="15%" className='text-center border border-slate-400'>At Non-peak Period</td>
                <td className='text-center border border-slate-400'>At Peak Periods</td>
              </tr>              
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Badminton Court </td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>No Guests (weekend and public holidays 9:00am to 6:00pm)</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Basketball Court </td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Bowling Greens </td>
                <td className='border border-slate-400'>No Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Children's Playrooms </td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Fitness Centre </td>
                <td className='border border-slate-400'>No Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Golf Simulators </td>
                <td className='border border-slate-400'>No Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Library </td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Sauna and Steam Centre </td>
                <td className='border border-slate-400'>1  Guest</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Snooker Room </td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Squash Courts </td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>1  Guest</td>
                <td className='border border-slate-400'>No  Guests (weekdays 6:30-9:30pm; Saturdays 10:15am-6:30pm)</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Swimming Pool Complex </td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>No  Guests (weekdays and public holidays; weekdays after 6:00 pm)</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Tennis Courts </td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>No  Guests (weekdays after 6:00pm)</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Ten  Pin Bowling Complex</td>
                <td className='border border-slate-400'>3 Guests</td>
                <td className='border border-slate-400'>-</td>
                <td className='border border-slate-400'>-</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "limoservice":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>Zone 1 (HK$400)</th>
                <th className='text-left border border-slate-400'>Zone 2 (HK$400)</th>
                <th className='text-left border border-slate-400'>Zone 3 (HK$400)</th>                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Tsuen Wan</td>
                <td className='border border-slate-400'>Pok Fu Lam</td>
                <td className='border border-slate-400'>Tai Wai</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Kwai Chung</td>
                <td className='border border-slate-400'>Sai Ying Pun</td>
                <td className='border border-slate-400'>Shatin</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Tsing Yi</td>
                <td className='border border-slate-400'>Sheung Wan</td>
                <td className='border border-slate-400'>Ma On Shan</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Mei Foo</td>
                <td className='border border-slate-400'>Central</td>
                <td className='border border-slate-400'>Tai Po</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Cheung Sha Wan</td>
                <td className='border border-slate-400'>Causeway Bay</td>
                <td className='border border-slate-400'>Fanling</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Shum Shui Po</td>
                <td className='border border-slate-400'>Wan Chai</td>
                <td className='border border-slate-400'>Sheung Shui</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Kowloon Tong</td>
                <td className='border border-slate-400'>Happy Valley</td>
                <td className='border border-slate-400'>Tin Shui Wai</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Yau Ma Tei</td>
                <td className='border border-slate-400'>Midlevels</td>
                <td className='border border-slate-400'>Tuen Mun</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Mongkok</td>
                <td className='border border-slate-400'>The Peak</td>
                <td className='border border-slate-400'>Yuen Long</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Prince Edward</td>
                <td className='border border-slate-400'>North Point</td>
                <td className='border border-slate-400'>Kam Tin</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Hung Hom</td>
                <td className='border border-slate-400'>Quarry Bay</td>
                <td className='border border-slate-400'>Lok Ma Chau</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Tsim Sha Tsui</td>
                <td className='border border-slate-400'>Sau Kei Wan</td>
                <td className='border border-slate-400'>Sha Tau Kok</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>San Po Kong</td>
                <td className='border border-slate-400'>Chai Wan</td>
                <td className='border border-slate-400'>Clearwater Bay</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Wong Tai Sin</td>
                <td className='border border-slate-400'>Aberdeen</td>
                <td className='border border-slate-400'>Sai Kung</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Kowloon Bay</td>
                <td className='border border-slate-400'>Wong Chuk Hang</td>
                <td className='border border-slate-400'>Tseung Kwan 0</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Kwun Tong</td>
                <td className='border border-slate-400'>Repulse Bay</td>
                <td className='border border-slate-400'>Chung Hom Kok</td>
              </tr>
              <tr>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'>Tai Tam</td>
              </tr>
              <tr>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'>Stanley</td>
              </tr>
              <tr>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'>Shek O</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "companionairfare":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>Hong Kong to London (Business Class Round Trip)</th>
                <th className='text-left border border-slate-400'>Cost of Your Ticket</th>
                <th className='text-left border border-slate-400'>Cost of Your Companion's Ticket</th>
                <th className='text-left border border-slate-400'>Cost for Two Tickets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Airfare</td>
                <td className='border border-slate-400'>$92,310</td>
                <td className='border border-slate-400'>$0</td>
                <td className='border border-slate-400'>$92,310</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Taxes & Surcharges</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$5,384</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Ticket Issuance Fee</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$980</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Price</td>
                <td className='border border-slate-400'>$95,492</td>
                <td className='border border-slate-400'>$3,182</td>
                <td className='border border-slate-400'>$98,674</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "individualairfare":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>Hong Kong to London (Business Class Round Trip)</th>
                <th className='text-left border border-slate-400'>Cost of Your Ticket</th>
                <th className='text-left border border-slate-400'>Cost og Your Tickets After 15% Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Airfare</td>
                <td className='border border-slate-400'>$92,310</td>
                <td className='border border-slate-400'>$78,464</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Taxes & Surcharges</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$2,692</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Ticket Issuance Fee</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$490</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Price</td>
                <td className='border border-slate-400'>$95,492</td>
                <td className='border border-slate-400'>$81,646</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "jockey-zn":
      output = (
        <div className="container relative my-4">
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-center border border-slate-400'>Citi貴賓廂房訂座人數</th>	
                <th className='text-center border border-slate-400'>須支付之Citi貴賓廂房訂座人數</th>
                <th className='text-center border border-slate-400'>贈送之Citi貴賓廂房訂座人數</th>
              </tr>           
              </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>1</td>	
                <td className='border border-slate-400'>1</td>
                <td className='border border-slate-400'>0</td>  
              </tr>
              <tr>
                <td className='border border-slate-400'>2</td>	
                <td className='border border-slate-400'>2</td>
                <td className='border border-slate-400'>0</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>3</td>	
                <td className='border border-slate-400'>2</td>
                <td className='border border-slate-400'>1</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>4</td>	
                <td className='border border-slate-400'>2</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>5</td>	
                <td className='border border-slate-400'>3</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>6</td>	
                <td className='border border-slate-400'>4</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>7</td>	
                <td className='border border-slate-400'>5</td>
                <td className='border border-slate-400'>2</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>8</td>	
                <td className='border border-slate-400'>6</td>
                <td className='border border-slate-400'>2</td>                
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "michelin2-zn":
      output = (
        <div className="container relative my-4">
          <table className="table-fixed border-collapse border border-slate-400">
            <tbody>
            <tr>
                    <td className='border border-slate-400'>Ami</td>
                    <td className='border border-slate-400'>米芝蓮指南入選 (餐廳) </td>
                    <td className='border border-slate-400'><ol className='ml-10 list-disc'><li>晚餐嚐味菜單買三送一<sup>**</sup> - 逢星期六至三適用 </li></ol><sup>*</sup>晚餐六道菜嚐味菜單每位原價: HK$1,288+10% 或八道菜嚐味菜單每位原價: HK$1,888+10%
                      <ol className='ml-10 list-decimal'>
                      <li>推廣適用於 2023 年 1 月 1 日至 12 月 31 日。</li>
					  <li>推廣於指定日期不適用。指定日期包括：2023年1月1日，2月14日，5月14日，6月18日， 12月24 – 26及31日</li></ol>
                      
                     </td>
                  </tr>                
                
                  <tr>
                    <td className='border border-slate-400'>Amber</td>
                    <td className='border border-slate-400'>2星</td>
                    <td className='border border-slate-400'>
                      <ol className='ml-10 list-disc'>
                        <li>每位賓客獲贈香檳一杯或無酒精飲品一杯</li>
						<li>兩位賓客以上享用六道菜午餐或八道菜晚餐菜單可享紀念菜單及Amberlicious巧克力</li>
                      	<li>於預訂時標註生日，可享Amber生日蛋糕、生日賀卡、紀念菜單及Amberlicious巧克力</li></ol>
	<ol className='ml-10 list-decimal'>
	<li>推廣適用於 2023 年 1 月 1 日至 12 月 31 日。</li>
	<li>推廣不適用於特別活動及Amber私人廂房。</li>
	<li>推廣於指定日期不適用，包括：2023年1月1 – 2日，2月14日，4月7 – 10日，5月14日，6月18日， 12月23 – 26及30 – 31日。</li></ol>
	</td>
               
                  </tr>
                  <tr>
                    <td className='border border-slate-400'>Andō</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'><ol className='ml-10 list-disc'><li>免費飲品</li>
                      <li>免費贈品</li></ol>
                     </td>
                  </tr>
                    <tr>
                    <td className='border border-slate-400'>Arbor</td>
                    <td className='border border-slate-400'>2星 </td>
                    <td className='border border-slate-400'><ol className='ml-10 list-disc'><li>Full Arbor Experience晚餐菜單買三送一 - 逢星期一至四適用 </li></ol>
                  <ol className='ml-10 list-decimal'>
					<li>推廣適用於 2023 年 1 月 1 日至 12 月 31 日。</li>
					<li>推廣於指定日期不適用。指定日期包括：2023年1月1日，2月14日，5月14日，6月18日， 12月24 – 26及31日。</li></ol>
</td>

                  </tr>
                       
				  <tr>
                    <td className='border border-slate-400'>ÉPURE</td>
                    <td className='border border-slate-400'>1星</td>
                   <td className='border border-slate-400'>
                      <ol className='ml-10 list-disc'>
                        <li>晚餐嚐味菜單買三送一</li></ol>
                      <ol className='ml-10 list-decimal'>
						<li>推廣適用於 2023 年 1 月 1 日至 12 月 31 日。</li>
                     	<li>推廣於指定日期不適用。指定日期包括：2023年1月1日，2月14日，5月14日，6月18日， 12月24 – 26及31日。</li>	
                      </ol></td>
                  </tr>

                <tr>
                    <td className='border border-slate-400'>Hansik Goo</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'>
                      <ol className='ml-10 list-disc'>
                      	<li>預訂4位或以上於大堂用膳，每位賓客獲贈香檳一杯或無酒精飲品一杯</li>
						<li>預訂貴賓廂房用膳，可獲贈香檳一支</li></ol>
                          <ol className='ml-10 list-decimal'>
                         		<li> 推廣適用於 2023 年 1 月 1 日至 12 月 31 日。</li>
								<li>貴賓廂房設最低消費: HK$16,000 +10%</li></ol>
                  </td>
                  </tr>

                <tr>
                    <td className='border border-slate-400'>Whey</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'>
                      <ol className='ml-10 list-disc'>
                      	<li>預訂4位或以上於大堂用膳，每位賓客獲贈香檳一杯或無酒精飲品一杯</li>
						<li>預訂貴賓廂房用膳，可獲贈香檳一支</li></ol>
                           <ol className='ml-10 list-decimal'>
                         <li> 推廣適用於 2023 年 1 月 1 日至 12 月 31 日。</li>
						 <li> 貴賓廂房設最低消費: 星期一至四 HK$20,000 +10%;星期五至日 HK$22,000 +10%</li></ol>
                  </td>
                  </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "michelin1-zn":
        output = (
          <div className="container relative my-4">
            <table className="table-fixed border-collapse border border-slate-400">
              <tbody>
              <tr>
                    <td className='border border-slate-400'>Arbor</td>
                    <td className='border border-slate-400'>2星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
             i.	餐廳需提前14天預訂。<br/>
		 	ii.	預約受條款約束。每位預約客人需繳付HK$200不可退還之訂金。<br/>優惠於週末午膳不適用。<br/>
			iii.	最多可預訂4人。<br/>
			iv.	預約日期只可於用膳日期前七天更改一次。
</td>
                  </tr> 
                  <tr>
                    <td className='border border-slate-400'>Andō</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇 </u><br/>i.	優惠名額有限。<br/>ii.	餐廳需二天前預訂。<br/>
iii.	預約受條款約束。每位預約客人需繳付HK$1,000不可退還之訂金。</td>
                  </tr>
                 <tr>
                    <td className='border border-slate-400'>Bâtard</td>
                    <td className='border border-slate-400'>米芝蓮指南入選 (餐廳)	</td>
                    <td className='border border-slate-400'><u>-預約禮遇</u><br/>i.	最多可預訂4人。<br/> ii. 餐廳需提前30天預訂。
<br/> iii.預約受條款約束。每位預約客人需繳付HK$500 不可退還之訂金。
<br/> iv. 不可退還訂金及預約日期不可再作更改。 （由於政府限制措施 ，或任何其他維護，導致餐廳無法提供服務除外。）
<br/> v. 任何人數更改如少於二十四小時通知，所付之訂金將不作退還。
<br/> vi. 在特定節日，所有禮賓需訂購特別菜單（如情人節和聖誕節等）。
</td>
                  </tr>
                      <tr>
                    <td className='border border-slate-400'>Caprice</td>
                    <td className='border border-slate-400'>3 星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
                    i. 餐廳需提前14天預訂。<br/>
 					ii. 預約受條款約束。每位預約客人需繳付HK$200不可退還之訂金。<br/>
					iii. 最多可預訂4人。<br/>
                    iv. 預約日期只可於用膳日期前七天更改一次。<br/>
                    v. 餐廳於星期一休息。<br/>

</td>
                  </tr>
                  <tr>
                    <td className='border border-slate-400'>CHAAT</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
                     i.	客戶如欲於Main Dining Hall用膳，需於預定用餐月份前的一個月份的15日提出預訂（例子：如預定於五月到餐廳用膳，需於三月十五日提出預訂)。     <br/>
                    ii.	最多可預訂4人。<br/>
iii.	優惠名額有限。                                                                                              </td>
                  </tr>
  <tr>
                    <td className='border border-slate-400'>龍景軒</td>
                    <td className='border border-slate-400'>2星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
					i.	餐廳需提前7天預訂。<br/>
                   ii.	最多可預訂4人。<br/>
iii.	優惠名額有限。</td>
                  </tr>
                  <tr>
                    <td className='border border-slate-400'>鮨．齋藤</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
					i. 餐廳需提前30天預訂。<br/>
                    ii. 最多可預訂4人。<br/>
					iii. 確定預約時，餐廳會收取50%餐單價值作不可退還訂金及後不可再作更改。<br/>
					iv. 如有任何不出現、預訂日期及人數更改少於72小時，餐廳會收取100%餐單價值作不可退還訂金。<br/>
                    v. 遲到超過15分鐘的客人，將跳過某些餐單。 遲到1小時或更長時間的客人將不作服務，及償押金將被沒收<br/>
                    vi. 在預訂時，必須提到食物過敏或飲食限制。
</td>
                  </tr>
<tr>
                    <td className='border border-slate-400'>Sushi Wadatsumi</td>
                    <td className='border border-slate-400'>1星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
					
                     i.	最多可預訂2人。。<br/>
                     ii.	餐廳需提於預定用餐月份前的一個月份的7日提出預訂（例子：如預定於五月到餐廳用膳，需於三月二十三日提出預訂)。<br/>
                       iii.餐廳將根據座位限額提供優先權給予預訂更改或更多人數的派對預訂。
 <br/> iv. 預訂時需提供信用卡；如預訂5人或以上，預訂時需支付每人HKD500訂金
</td>
                  </tr>
                  <tr>
                    <td className='border border-slate-400'>唐閣</td>
                    <td className='border border-slate-400'>3星</td>
                    <td className='border border-slate-400'><u>- 預約禮遇</u><br/>
                     i. 餐廳需提前14天預訂。<br/>
                     ii. 最多可預訂4人。</td>
                  </tr>
              </tbody>
            </table>
          </div>  
        );
        break;
    case "hkfootballclub-nz":
        output = (
          <div className="container relative my-4">                    
            <table className="table-fixed border-collapse border border-slate-400">
              <thead>
                <tr>
                  <td width="20%" rowspan="2" className='text-center border border-slate-400'></td>
                  <td colspan="3" className='text-center border border-slate-400'>允許的同行者人數：</td>
                </tr>
                <tr>
                  <td width="15%" className='text-center border border-slate-400'>任何時候</td>
                  <td width="15%" className='text-center border border-slate-400'>於非繁忙時間</td>
                  <td className='text-center border border-slate-400'>於繁忙時間</td>
                </tr>              
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-400'>羽毛球場 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>週末及公眾假期上午9:00至下午6:00不允許任何同行者</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>籃球場 </td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>草地滾球場 </td>
                  <td className='border border-slate-400'>不設同行者</td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>兒童遊戲室 </td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>健身中心 </td>
                  <td className='border border-slate-400'>不設同行者</td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>高爾夫模擬器 </td>
                  <td className='border border-slate-400'>不設同行者</td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>圖書館 </td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>桑拿以及蒸氣中心 </td>
                  <td className='border border-slate-400'>1位同行者 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>桌球室 </td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>壁球場 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>1位同行者 </td>
                  <td className='border border-slate-400'>週一至五下午6:30至9:30及週六上午10:15至下午6:30不允許任何同行者 </td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>游泳池 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>週末及公眾假期全日;以及週一至五下午6:00後不允許任何同行者 </td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>網球場 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>週一至五下午6:00後不允許任何同行者 </td>
                </tr>
                <tr>
                  <td className='border border-slate-400'>保齡球館 </td>
                  <td className='border border-slate-400'>3位同行者 </td>
                  <td className='border border-slate-400'>-</td>
                  <td className='border border-slate-400'>-</td>
                </tr>
              </tbody>
            </table>
          </div>  
        );
        break;      
    case "limoservice-zn":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>區域 1 (HK$400)</th>
                <th className='text-left border border-slate-400'>區域 2 (HK$400)</th>
                <th className='text-left border border-slate-400'>區域 3 (HK$400)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>荃灣</td>
                <td className='border border-slate-400'>薄扶林</td>
                <td className='border border-slate-400'>沙田</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>葵涌</td>
                <td className='border border-slate-400'>西營盤</td>
                <td className='border border-slate-400'>馬鞍山</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>青衣</td>
                <td className='border border-slate-400'>上環</td>
                <td className='border border-slate-400'>大圍</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>美孚</td>
                <td className='border border-slate-400'>中環</td>
                <td className='border border-slate-400'>大埔</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>長沙灣</td>
                <td className='border border-slate-400'>銅鑼灣</td>
                <td className='border border-slate-400'>粉嶺</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>深水埗</td>
                <td className='border border-slate-400'>灣仔</td>
                <td className='border border-slate-400'>上水</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>九龍塘</td>
                <td className='border border-slate-400'>跑馬地</td>
                <td className='border border-slate-400'>天水圍</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>油麻地</td>
                <td className='border border-slate-400'>半山</td>
                <td className='border border-slate-400'>屯門</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>旺角</td>
                <td className='border border-slate-400'>山頂區</td>
                <td className='border border-slate-400'>元朗</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>太子</td>
                <td className='border border-slate-400'>北角</td>
                <td className='border border-slate-400'>錦田</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>紅磡</td>
                <td className='border border-slate-400'>鰂魚涌</td>
                <td className='border border-slate-400'>落馬洲</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>尖沙咀</td>
                <td className='border border-slate-400'>筲箕灣</td>
                <td className='border border-slate-400'>沙頭角</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>新蒲崗</td>
                <td className='border border-slate-400'>柴灣</td>
                <td className='border border-slate-400'>清水灣</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>黃大仙</td>
                <td className='border border-slate-400'>香港仔</td>
                <td className='border border-slate-400'>西貢</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>九龍灣</td>
                <td className='border border-slate-400'>黃竹坑</td>
                <td className='border border-slate-400'>將軍澳</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>觀塘</td>
                <td className='border border-slate-400'>淺水灣</td>
                <td className='border border-slate-400'>舂磡角</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>&nbsp;</td>
                <td className='border border-slate-400'>&nbsp;</td>
                <td className='border border-slate-400'>大潭</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>&nbsp;</td>
                <td className='border border-slate-400'>&nbsp;</td>
                <td className='border border-slate-400'>赤柱</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>&nbsp;</td>
                <td className='border border-slate-400'>&nbsp;</td>
                <td className='border border-slate-400'>石澳</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "companionairfare-zn":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>香港至倫敦（商務客位來回機票)</th>
                <th className='text-left border border-slate-400'>您的機票費用</th>
                <th className='text-left border border-slate-400'>您的同行機票費用</th>
                <th className='text-left border border-slate-400'>兩張機票的費用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>票價</td>
                <td className='border border-slate-400'>$92,310</td>
                <td className='border border-slate-400'>$0</td>
                <td className='border border-slate-400'>$92,310</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>稅項及附加費</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$5,384</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>發出機票之費用</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$980</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>總票價</td>
                <td className='border border-slate-400'>$95,492</td>
                <td className='border border-slate-400'>$3,182</td>
                <td className='border border-slate-400'>$98,674</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "individualairfare-zn":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>香港至倫敦（商務客位來回機票)</th>
                <th className='text-left border border-slate-400'>您的機票費用</th>
                <th className='text-left border border-slate-400'>85折後機票的費用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>票價</td>
                <td className='border border-slate-400'>$92,310</td>
                <td className='border border-slate-400'>$78,464</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>稅項及附加費</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$2,692</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>發出機票之費用</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$490</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>總票價</td>
                <td className='border border-slate-400'>$95,492</td>
                <td className='border border-slate-400'>$81,646</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
  }

  return output;
    
}

export default Table;