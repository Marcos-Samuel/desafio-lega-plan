'use server';

import { kv } from '@vercel/kv';
import { v4 as uuidv4 } from 'uuid';

export type Habit = {
  id: string;
  habit: string;
  done: boolean;
};

export async function addHabit(habit: string): Promise<Habit[]> {
  const currentHabitsRaw = await kv.hget('habits', 'list');
  const currentHabits: Habit[] = Array.isArray(currentHabitsRaw)
    ? currentHabitsRaw
    : [];

  const updatedHabits = [...currentHabits, { habit, done: false, id:uuidv4() }];

  await kv.hset('habits', { list: updatedHabits });

  return updatedHabits;
}

export async function deleteHabit(habitId: string): Promise<Habit[]> {
  const currentHabitsRaw = await kv.hget('habits', 'list');
  const currentHabits: Habit[] = Array.isArray(currentHabitsRaw)
    ? currentHabitsRaw
    : [];

  const updatedHabits = currentHabits.filter((habit: Habit) => habit.id !== habitId);

  await kv.hset('habits', { list: updatedHabits }); 

  return updatedHabits;
}

export async function getHabits(): Promise<Habit[]> {
 
  const habitsRaw = await kv.hget('habits', 'list');
  
  const habits: Habit[] = Array.isArray(habitsRaw) ? habitsRaw : [];

  return habits;
}


export async function toggleHabitStatus(habitId: string): Promise<Habit[]> {

  const currentHabitsRaw = await kv.hget('habits', 'list');
  const currentHabits: Habit[] = Array.isArray(currentHabitsRaw) ? currentHabitsRaw : [];
  
  const updatedHabits = currentHabits.map((h: Habit) => 
    h.id === habitId ? { ...h, done: !h.done } : h
  );
  
  await kv.hset('habits', { list: updatedHabits }); 
  
  return updatedHabits; 
}

