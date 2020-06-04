import React, { useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

export default function Dashboard() {
  // const [schedule, setSchedule] = useState([]);
  // const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   async function loadSchedule() {
  //     const response = await api.get('schedule', {
  //       params: { date },
  //     });

  //     const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  //     const data = range.map(hour => {
  //       const checkDate = setMilliseconds(
  //         setSeconds(setMinutes(setHours(date, hour), 0), 0),
  //         0
  //       );
  //       const compareDate = utcToZonedTime(checkDate, timezone);

  //       return {
  //         time: `${hour}:00h`,
  //         past: isBefore(compareDate, new Date()),
  //         appointment: response.data.find(a =>
  //           isEqual(parseISO(a.date), compareDate)
  //         ),
  //       };
  //     });
  //     setSchedule(data);
  //   }

  //   loadSchedule();
  // }, [date]);

  // function handlePrevDay() {
  //   setDate(subDays(date, 1));
  // }

  // function handleNextDay() {
  //   setDate(addDays(date, 1));
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
    };

    try {
      const response = await api.post('food', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container>
      <div className="register-container">
        <div className="content">
          <section>
            {/* <img src={logoImg} alt="Be The Hero" /> */}
            <p>logo</p>

            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>
          </section>

          <form onSubmit={handleRegister}>
            <input
              placeholder="food"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              placeholder="eat"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              placeholder="infos"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
