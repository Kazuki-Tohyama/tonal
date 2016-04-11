/* global describe it */
var assert = require('assert')
var tonal = require('..')

describe('tonal', function () {
  it('has notation', function () {
    assert(tonal.notation)
    assert(tonal.note)
    assert(tonal.note.regex)
    assert(tonal.note.parse)
    assert(tonal.note.str)
    assert(tonal.interval.regex)
    assert(tonal.interval.parse)
    assert(tonal.interval.str)
    assert(tonal.pitch.parse)
    assert(tonal.pitch.str)
    assert(tonal.roman.regex)
    assert(tonal.roman.parse)
  })
  it('note and midi support', function () {
    assert(tonal.midi)
    assert(tonal.midi.freq)
    assert(tonal.midi.note)
    assert(tonal.note.midi)
    assert(tonal.note.fromMidi)
    assert(tonal.note.enharmonics)
    assert(tonal.note.freq)
    assert(tonal.pitchClass)
    assert(tonal.interval.simplify)
  })

  it('has transpose and interval', function () {
    assert(tonal.transpose)
    assert(tonal.note.transpose)
    assert(tonal.note.interval)
  })

  it('collection of notes', function () {
    assert(tonal.transform)
    assert(tonal.map)
    assert(tonal.filter)
    assert(tonal.reduce)
    assert(tonal.harmonizer)
    assert(tonal.sort)
    assert(tonal.sortAsc)
    assert(tonal.sortDesc)
    assert(tonal.noteFilter)
    assert(tonal.noteFilter.midi)
  })

  it('has chords and scales support', function () {
    assert(tonal.scale)
    assert(tonal.scale.get)
    assert(tonal.scale.name)
    assert(tonal.chord)
    assert(tonal.chord.get)
    assert(tonal.chord.name)
  })
})
