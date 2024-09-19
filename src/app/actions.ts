'use server';

import { kv } from '@vercel/kv';

type Habit = {
  habit: string;
  done: boolean;
};

export async function addHabit(habit: string): Promise<Habit[]> {
  const currentHabitsRaw = await kv.hget('habits', 'list');
  const currentHabits: Habit[] = Array.isArray(currentHabitsRaw)
    ? currentHabitsRaw
    : [];

  const updatedHabits = [...currentHabits, { habit, done: false }];

  await kv.hset('habits', { list: updatedHabits });

  return updatedHabits;
}

export async function deleteHabit(habit: string): Promise<Habit[]> {

  const currentHabitsRaw = await kv.hget('habits', 'list');
  const currentHabits: Habit[] = Array.isArray(currentHabitsRaw)
    ? currentHabitsRaw
    : [];

  const updatedHabits = currentHabits.filter((h: Habit) => h.habit !== habit);

  await kv.hset('habits', { list: updatedHabits });

  return updatedHabits;
}

export async function getHabits(): Promise<Habit[]> {
  const habitsRaw = await kv.hget('habits', 'list');
  const habits: Habit[] = Array.isArray(habitsRaw) ? habitsRaw : [];

  return habits;
}

export async function toggleHabitStatus(habit: string): Promise<Habit[]> {
  const currentHabitsRaw = await kv.hget('habits', 'list');
  const currentHabits: Habit[] = Array.isArray(currentHabitsRaw) ? currentHabitsRaw : [];
  
  const updatedHabits = currentHabits.map((h: Habit) => 
    h.habit === habit ? { ...h, done: !h.done } : h
  );
  
  await kv.hset('habits', { list: updatedHabits });
  
  return updatedHabits;
}

