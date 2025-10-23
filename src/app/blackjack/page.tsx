"use client"

import React, { useState, useEffect } from 'react';
import { RefreshCw, Lock, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card as UICard, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

type Suit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
type Value = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
type GameState = 'question' | 'playing' | 'dealerTurn' | 'finished' | 'reveal';

interface Card {
  suit: Suit;
  value: Value;
}

interface CardProps {
  card: Card;
  hidden?: boolean;
}

const SocialBlackjack: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<GameState>('question');
  const [message, setMessage] = useState<string>('Answer a question to play!');
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [dealerScore, setDealerScore] = useState<number>(0);
  const [showDealerCard, setShowDealerCard] = useState<boolean>(false);
  const [playerAnswer, setPlayerAnswer] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [revealedSecrets, setRevealedSecrets] = useState<string[]>([]);
  const [pendingSecret, setPendingSecret] = useState<string>('');

  const questions: string[] = [
    "What's your most embarrassing childhood memory?",
    "What's the worst date you've ever been on?",
    "What's a secret talent nobody knows about?",
    "What's your biggest fear that you hide from others?",
    "What's the most trouble you got into as a kid?",
    "What's a lie you told that you still feel guilty about?",
    "What's your most cringe-worthy moment in public?",
    "What's something you do when you're alone that you'd never admit?",
    "What's your guilty pleasure that you're embarrassed about?",
    "What's the most ridiculous thing you've cried about?"
  ];

  const mySecrets: string[] = [
    "I once tried to impress someone by pretending I could skateboard. I fell in front of 20 people and blamed it on a 'slippery sidewalk'.",
    "I cried during the Toy Story 3 ending scene... three separate times. I was 25.",
    "I wore my shirt inside out for an entire work day and only realized when I got home.",
    "I rehearse arguments in the shower and sometimes lose to my imaginary opponent.",
    "I once waved back at someone who wasn't waving at me, then pretended to stretch to save face.",
    "I googled 'how to boil water' when I first moved out. I'm still not 100% confident.",
    "I created a fake girlfriend in high school and had to 'break up' with her when people wanted to meet her.",
    "I still sleep with a childhood stuffed animal and it has a name... Mr. Fluffkins.",
    "I once liked my crush's photo from 3 years ago at 2 AM and panicked so hard I deleted my entire account.",
    "I practiced my signature for weeks in middle school to make it look cool. It just looks like a squiggle.",
    "I accidentally called my teacher 'Mom' in high school and the nickname 'Mama's Boy' stuck for a year.",
    "I convinced myself I was allergic to vegetables for 2 years. Turns out I just didn't like them.",
    "I fake-laughed at a joke I didn't understand and it became a running gag for months. I still don't get it.",
    "I once hid in a bathroom stall for 30 minutes to avoid small talk with an acquaintance.",
    "I tried to impress someone by saying I spoke French. I only knew 'omelette du fromage' from Dexter's Lab."
  ];

  const suits: Suit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
  const values: Value[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const createDeck = (): Card[] => {
    const newDeck: Card[] = [];
    suits.forEach(suit => {
      values.forEach(value => {
        newDeck.push({ suit, value });
      });
    });
    return shuffleDeck(newDeck);
  };

  const shuffleDeck = (deck: Card[]): Card[] => {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getCardValue = (card: Card): number => {
    if (card.value === 'A') return 11;
    if (['J', 'Q', 'K'].includes(card.value)) return 10;
    return parseInt(card.value);
  };

  const calculateScore = (hand: Card[]): number => {
    let score = 0;
    let aces = 0;

    hand.forEach(card => {
      const value = getCardValue(card);
      score += value;
      if (card.value === 'A') aces++;
    });

    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }

    return score;
  };

  const dealCard = (currentDeck: Card[]): { card: Card; newDeck: Card[] } => {
    const newDeck = [...currentDeck];
    const card = newDeck.pop()!;
    return { card, newDeck };
  };

  const getRandomQuestion = (): string => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const getRandomSecret = (): string => {
    const availableSecrets = mySecrets.filter(s => !revealedSecrets.includes(s));
    if (availableSecrets.length === 0) return mySecrets[Math.floor(Math.random() * mySecrets.length)];
    return availableSecrets[Math.floor(Math.random() * availableSecrets.length)];
  };

  const submitAnswer = (): void => {
    if (playerAnswer.trim().length < 10) {
      setMessage('Come on, give a real answer! (at least 10 characters)');
      return;
    }
    startGame();
  };

  const startGame = (): void => {
    let newDeck = createDeck();
    const cards: Card[] = [];
    
    for (let i = 0; i < 4; i++) {
      const { card, newDeck: updatedDeck } = dealCard(newDeck);
      cards.push(card);
      newDeck = updatedDeck;
    }

    setPlayerHand([cards[0], cards[2]]);
    setDealerHand([cards[1], cards[3]]);
    setDeck(newDeck);
    setGameState('playing');
    setShowDealerCard(false);
    setMessage('Hit or Stand?');
    setPendingSecret(getRandomSecret());
  };

  const hit = (): void => {
    if (gameState !== 'playing') return;

    const { card, newDeck } = dealCard(deck);
    const newPlayerHand = [...playerHand, card];
    setPlayerHand(newPlayerHand);
    setDeck(newDeck);

    const score = calculateScore(newPlayerHand);
    if (score > 21) {
      setGameState('finished');
      setShowDealerCard(true);
      setMessage('Bust! You lose. No secret for you!');
    }
  };

  const stand = (): void => {
    if (gameState !== 'playing') return;
    
    setGameState('dealerTurn');
    setShowDealerCard(true);
    dealerPlay();
  };

  const dealerPlay = (): void => {
    let currentDeck = [...deck];
    let currentDealerHand = [...dealerHand];
    
    setTimeout(() => {
      const playDealerTurn = (): void => {
        let score = calculateScore(currentDealerHand);
        
        if (score < 17) {
          const { card, newDeck } = dealCard(currentDeck);
          currentDealerHand = [...currentDealerHand, card];
          currentDeck = newDeck;
          setDealerHand(currentDealerHand);
          setDeck(currentDeck);
          
          setTimeout(playDealerTurn, 800);
        } else {
          finishGame(currentDealerHand);
        }
      };
      
      playDealerTurn();
    }, 500);
  };

  const finishGame = (finalDealerHand: Card[]): void => {
    const playerFinalScore = calculateScore(playerHand);
    const dealerFinalScore = calculateScore(finalDealerHand);

    setGameState('finished');

    if (dealerFinalScore > 21) {
      setMessage('Dealer busts! You win!');
      setTimeout(() => {
        setGameState('reveal');
        setMessage('🎉 You won! Here\'s an embarrassing secret...');
      }, 2000);
    } else if (playerFinalScore > dealerFinalScore) {
      setMessage('You win!');
      setTimeout(() => {
        setGameState('reveal');
        setMessage('🎉 You won! Here\'s an embarrassing secret...');
      }, 2000);
    } else if (playerFinalScore < dealerFinalScore) {
      setMessage('Dealer wins. No secret revealed!');
    } else {
      setMessage('Push! No secret this time!');
    }
  };

  const revealSecret = (): void => {
    setRevealedSecrets([...revealedSecrets, pendingSecret]);
    resetGame();
  };

  const resetGame = (): void => {
    setPlayerHand([]);
    setDealerHand([]);
    setDeck([]);
    setGameState('question');
    setMessage('Answer another question to play again!');
    setShowDealerCard(false);
    setPlayerAnswer('');
    setCurrentQuestion(getRandomQuestion());
    setPendingSecret('');
  };

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  useEffect(() => {
    setPlayerScore(calculateScore(playerHand));
  }, [playerHand]);

  useEffect(() => {
    setDealerScore(calculateScore(dealerHand));
  }, [dealerHand]);

  const CardComponent: React.FC<CardProps> = ({ card, hidden = false }) => {
    if (hidden) {
      return (
        <div className="w-20 h-28 bg-blue-600 rounded-lg border-2 flex items-center justify-center">
          <div className="text-white text-4xl">?</div>
        </div>
      );
    }

    const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
    const suitSymbol: Record<Suit, string> = {
      spades: '♠',
      hearts: '♥',
      clubs: '♣',
      diamonds: '♦'
    };

    return (
      <div className={`w-20 h-28 bg-white rounded-lg border-2 ${isRed ? 'border-red-500' : 'border-gray-800'} flex flex-col items-center justify-center p-2`}>
        <div className={`text-xs ${isRed ? 'text-red-500' : 'text-gray-800'} font-bold`}>
          {suitSymbol[card.suit]}
        </div>
        <div className={`text-3xl font-bold ${isRed ? 'text-red-500' : 'text-gray-800'}`}>
          {card.value}
        </div>
        <div className={`text-xs ${isRed ? 'text-red-500' : 'text-gray-800'} font-bold`}>
          {suitSymbol[card.suit]}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-inherit p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Social Blackjack</h1>
          <p className="text-muted-foreground">Share secrets, win secrets!</p>
        </div>

        {gameState === 'question' && (
          <UICard>
            <CardHeader>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock size={24} />
                <CardTitle>Game Locked</CardTitle>
              </div>
              <CardDescription>Answer this question to unlock the game</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription className="text-lg font-semibold">
                  {currentQuestion}
                </AlertDescription>
              </Alert>
              <Textarea
                value={playerAnswer}
                onChange={(e) => setPlayerAnswer(e.target.value)}
                placeholder="Type your answer here... (be honest!)"
                className="h-32"
              />
              <Button onClick={submitAnswer} className="w-full" size="lg">
                <Unlock className="mr-2" size={20} />
                Submit & Play
              </Button>
            </CardContent>
          </UICard>
        )}

        {(gameState !== 'question' && gameState !== 'reveal') && (
          <>
            <UICard>
              <CardHeader>
                <CardTitle>Dealer</CardTitle>
                <CardDescription>
                  {showDealerCard ? `Score: ${dealerScore}` : 'Score: ?'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-2 flex-wrap">
                  {dealerHand.map((card, idx) => (
                    <CardComponent key={idx} card={card} hidden={idx === 1 && !showDealerCard} />
                  ))}
                </div>
              </CardContent>
            </UICard>

            <Alert>
              <AlertDescription className="text-center text-lg font-semibold">
                {message}
              </AlertDescription>
            </Alert>

            <UICard>
              <CardHeader>
                <CardTitle>Your Hand</CardTitle>
                <CardDescription>Score: {playerScore}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-2 flex-wrap">
                  {playerHand.map((card, idx) => (
                    <CardComponent key={idx} card={card} />
                  ))}
                </div>
              </CardContent>
            </UICard>

            <div className="flex justify-center gap-4">
              {gameState === 'playing' && (
                <>
                  <Button onClick={hit} size="lg">Hit</Button>
                  <Button onClick={stand} variant="destructive" size="lg">Stand</Button>
                </>
              )}

              {gameState === 'finished' && (
                <Button onClick={resetGame} size="lg">
                  <RefreshCw className="mr-2" size={20} />
                  New Round
                </Button>
              )}
            </div>
          </>
        )}

        {gameState === 'reveal' && (
          <UICard>
            <CardHeader>
              <CardTitle className="text-center text-2xl">🎉 Secret Unlocked! 🎉</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription className="text-lg">
                  {pendingSecret}
                </AlertDescription>
              </Alert>
              <Button onClick={revealSecret} className="w-full" size="lg">
                Play Another Round
              </Button>
            </CardContent>
          </UICard>
        )}

        {revealedSecrets.length > 0 && (
          <UICard>
            <CardHeader>
              <CardTitle>Secrets Discovered ({revealedSecrets.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {revealedSecrets.map((secret, idx) => (
                  <Alert key={idx}>
                    <AlertDescription>
                      <span className="font-bold">#{idx + 1}:</span> {secret}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </UICard>
        )}
      </div>
    </div>
  );
};

export default SocialBlackjack;