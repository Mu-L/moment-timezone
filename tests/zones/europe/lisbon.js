"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Lisbon"] = {

	"guess:by:offset" : helpers.makeTestGuess("Europe/Lisbon", { offset: true, expect: "Europe/London" }),

	"guess:by:abbr" : helpers.makeTestGuess("Europe/Lisbon", { abbr: true }),

	"1911" : helpers.makeTestYear("Europe/Lisbon", [
		["1911-12-31T23:59:59+00:00", "23:23:14", "LMT", 2205 / 60]
	]),

	"1912" : helpers.makeTestYear("Europe/Lisbon", [
		["1912-01-01T00:00:00+00:00", "00:00:00", "WET", 0]
	]),

	"1916" : helpers.makeTestYear("Europe/Lisbon", [
		["1916-06-17T22:59:59+00:00", "22:59:59", "WET", 0],
		["1916-06-17T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1916-10-31T23:59:59+00:00", "00:59:59", "WEST", -60],
		["1916-11-01T00:00:00+00:00", "00:00:00", "WET", 0]
	]),

	"1917" : helpers.makeTestYear("Europe/Lisbon", [
		["1917-02-28T22:59:59+00:00", "22:59:59", "WET", 0],
		["1917-02-28T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1917-10-14T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1917-10-14T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1918" : helpers.makeTestYear("Europe/Lisbon", [
		["1918-03-01T22:59:59+00:00", "22:59:59", "WET", 0],
		["1918-03-01T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1918-10-14T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1918-10-14T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1919" : helpers.makeTestYear("Europe/Lisbon", [
		["1919-02-28T22:59:59+00:00", "22:59:59", "WET", 0],
		["1919-02-28T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1919-10-14T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1919-10-14T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1920" : helpers.makeTestYear("Europe/Lisbon", [
		["1920-02-29T22:59:59+00:00", "22:59:59", "WET", 0],
		["1920-02-29T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1920-10-14T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1920-10-14T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1921" : helpers.makeTestYear("Europe/Lisbon", [
		["1921-02-28T22:59:59+00:00", "22:59:59", "WET", 0],
		["1921-02-28T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1921-10-14T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1921-10-14T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1924" : helpers.makeTestYear("Europe/Lisbon", [
		["1924-04-16T22:59:59+00:00", "22:59:59", "WET", 0],
		["1924-04-16T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1924-10-14T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1924-10-14T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1926" : helpers.makeTestYear("Europe/Lisbon", [
		["1926-04-17T22:59:59+00:00", "22:59:59", "WET", 0],
		["1926-04-17T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1926-10-02T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1926-10-02T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1927" : helpers.makeTestYear("Europe/Lisbon", [
		["1927-04-09T22:59:59+00:00", "22:59:59", "WET", 0],
		["1927-04-09T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1927-10-01T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1927-10-01T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1928" : helpers.makeTestYear("Europe/Lisbon", [
		["1928-04-14T22:59:59+00:00", "22:59:59", "WET", 0],
		["1928-04-14T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1928-10-06T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1928-10-06T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1929" : helpers.makeTestYear("Europe/Lisbon", [
		["1929-04-20T22:59:59+00:00", "22:59:59", "WET", 0],
		["1929-04-20T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1929-10-05T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1929-10-05T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1931" : helpers.makeTestYear("Europe/Lisbon", [
		["1931-04-18T22:59:59+00:00", "22:59:59", "WET", 0],
		["1931-04-18T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1931-10-03T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1931-10-03T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1932" : helpers.makeTestYear("Europe/Lisbon", [
		["1932-04-02T22:59:59+00:00", "22:59:59", "WET", 0],
		["1932-04-02T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1932-10-01T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1932-10-01T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1934" : helpers.makeTestYear("Europe/Lisbon", [
		["1934-04-07T22:59:59+00:00", "22:59:59", "WET", 0],
		["1934-04-07T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1934-10-06T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1934-10-06T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1935" : helpers.makeTestYear("Europe/Lisbon", [
		["1935-03-30T22:59:59+00:00", "22:59:59", "WET", 0],
		["1935-03-30T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1935-10-05T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1935-10-05T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1936" : helpers.makeTestYear("Europe/Lisbon", [
		["1936-04-18T22:59:59+00:00", "22:59:59", "WET", 0],
		["1936-04-18T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1936-10-03T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1936-10-03T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1937" : helpers.makeTestYear("Europe/Lisbon", [
		["1937-04-03T22:59:59+00:00", "22:59:59", "WET", 0],
		["1937-04-03T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1937-10-02T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1937-10-02T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1938" : helpers.makeTestYear("Europe/Lisbon", [
		["1938-03-26T22:59:59+00:00", "22:59:59", "WET", 0],
		["1938-03-26T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1938-10-01T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1938-10-01T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1939" : helpers.makeTestYear("Europe/Lisbon", [
		["1939-04-15T22:59:59+00:00", "22:59:59", "WET", 0],
		["1939-04-15T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1939-11-18T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1939-11-18T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1940" : helpers.makeTestYear("Europe/Lisbon", [
		["1940-02-24T22:59:59+00:00", "22:59:59", "WET", 0],
		["1940-02-24T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1940-10-05T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1940-10-05T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1941" : helpers.makeTestYear("Europe/Lisbon", [
		["1941-04-05T22:59:59+00:00", "22:59:59", "WET", 0],
		["1941-04-05T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1941-10-05T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1941-10-05T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1942" : helpers.makeTestYear("Europe/Lisbon", [
		["1942-03-14T22:59:59+00:00", "22:59:59", "WET", 0],
		["1942-03-14T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1942-04-25T21:59:59+00:00", "22:59:59", "WEST", -60],
		["1942-04-25T22:00:00+00:00", "00:00:00", "WEMT", -120],
		["1942-08-15T21:59:59+00:00", "23:59:59", "WEMT", -120],
		["1942-08-15T22:00:00+00:00", "23:00:00", "WEST", -60],
		["1942-10-24T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1942-10-24T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1943" : helpers.makeTestYear("Europe/Lisbon", [
		["1943-03-13T22:59:59+00:00", "22:59:59", "WET", 0],
		["1943-03-13T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1943-04-17T21:59:59+00:00", "22:59:59", "WEST", -60],
		["1943-04-17T22:00:00+00:00", "00:00:00", "WEMT", -120],
		["1943-08-28T21:59:59+00:00", "23:59:59", "WEMT", -120],
		["1943-08-28T22:00:00+00:00", "23:00:00", "WEST", -60],
		["1943-10-30T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1943-10-30T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1944" : helpers.makeTestYear("Europe/Lisbon", [
		["1944-03-11T22:59:59+00:00", "22:59:59", "WET", 0],
		["1944-03-11T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1944-04-22T21:59:59+00:00", "22:59:59", "WEST", -60],
		["1944-04-22T22:00:00+00:00", "00:00:00", "WEMT", -120],
		["1944-08-26T21:59:59+00:00", "23:59:59", "WEMT", -120],
		["1944-08-26T22:00:00+00:00", "23:00:00", "WEST", -60],
		["1944-10-28T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1944-10-28T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1945" : helpers.makeTestYear("Europe/Lisbon", [
		["1945-03-10T22:59:59+00:00", "22:59:59", "WET", 0],
		["1945-03-10T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1945-04-21T21:59:59+00:00", "22:59:59", "WEST", -60],
		["1945-04-21T22:00:00+00:00", "00:00:00", "WEMT", -120],
		["1945-08-25T21:59:59+00:00", "23:59:59", "WEMT", -120],
		["1945-08-25T22:00:00+00:00", "23:00:00", "WEST", -60],
		["1945-10-27T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1945-10-27T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1946" : helpers.makeTestYear("Europe/Lisbon", [
		["1946-04-06T22:59:59+00:00", "22:59:59", "WET", 0],
		["1946-04-06T23:00:00+00:00", "00:00:00", "WEST", -60],
		["1946-10-05T22:59:59+00:00", "23:59:59", "WEST", -60],
		["1946-10-05T23:00:00+00:00", "23:00:00", "WET", 0]
	]),

	"1947" : helpers.makeTestYear("Europe/Lisbon", [
		["1947-04-06T01:59:59+00:00", "01:59:59", "WET", 0],
		["1947-04-06T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1947-10-05T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1947-10-05T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1948" : helpers.makeTestYear("Europe/Lisbon", [
		["1948-04-04T01:59:59+00:00", "01:59:59", "WET", 0],
		["1948-04-04T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1948-10-03T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1948-10-03T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1949" : helpers.makeTestYear("Europe/Lisbon", [
		["1949-04-03T01:59:59+00:00", "01:59:59", "WET", 0],
		["1949-04-03T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1949-10-02T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1949-10-02T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1950" : helpers.makeTestYear("Europe/Lisbon", [
		["1950-04-02T01:59:59+00:00", "01:59:59", "WET", 0],
		["1950-04-02T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1950-10-01T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1950-10-01T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1951" : helpers.makeTestYear("Europe/Lisbon", [
		["1951-04-01T01:59:59+00:00", "01:59:59", "WET", 0],
		["1951-04-01T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1951-10-07T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1951-10-07T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1952" : helpers.makeTestYear("Europe/Lisbon", [
		["1952-04-06T01:59:59+00:00", "01:59:59", "WET", 0],
		["1952-04-06T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1952-10-05T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1952-10-05T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1953" : helpers.makeTestYear("Europe/Lisbon", [
		["1953-04-05T01:59:59+00:00", "01:59:59", "WET", 0],
		["1953-04-05T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1953-10-04T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1953-10-04T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1954" : helpers.makeTestYear("Europe/Lisbon", [
		["1954-04-04T01:59:59+00:00", "01:59:59", "WET", 0],
		["1954-04-04T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1954-10-03T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1954-10-03T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1955" : helpers.makeTestYear("Europe/Lisbon", [
		["1955-04-03T01:59:59+00:00", "01:59:59", "WET", 0],
		["1955-04-03T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1955-10-02T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1955-10-02T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1956" : helpers.makeTestYear("Europe/Lisbon", [
		["1956-04-01T01:59:59+00:00", "01:59:59", "WET", 0],
		["1956-04-01T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1956-10-07T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1956-10-07T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1957" : helpers.makeTestYear("Europe/Lisbon", [
		["1957-04-07T01:59:59+00:00", "01:59:59", "WET", 0],
		["1957-04-07T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1957-10-06T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1957-10-06T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1958" : helpers.makeTestYear("Europe/Lisbon", [
		["1958-04-06T01:59:59+00:00", "01:59:59", "WET", 0],
		["1958-04-06T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1958-10-05T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1958-10-05T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1959" : helpers.makeTestYear("Europe/Lisbon", [
		["1959-04-05T01:59:59+00:00", "01:59:59", "WET", 0],
		["1959-04-05T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1959-10-04T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1959-10-04T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1960" : helpers.makeTestYear("Europe/Lisbon", [
		["1960-04-03T01:59:59+00:00", "01:59:59", "WET", 0],
		["1960-04-03T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1960-10-02T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1960-10-02T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1961" : helpers.makeTestYear("Europe/Lisbon", [
		["1961-04-02T01:59:59+00:00", "01:59:59", "WET", 0],
		["1961-04-02T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1961-10-01T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1961-10-01T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1962" : helpers.makeTestYear("Europe/Lisbon", [
		["1962-04-01T01:59:59+00:00", "01:59:59", "WET", 0],
		["1962-04-01T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1962-10-07T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1962-10-07T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1963" : helpers.makeTestYear("Europe/Lisbon", [
		["1963-04-07T01:59:59+00:00", "01:59:59", "WET", 0],
		["1963-04-07T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1963-10-06T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1963-10-06T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1964" : helpers.makeTestYear("Europe/Lisbon", [
		["1964-04-05T01:59:59+00:00", "01:59:59", "WET", 0],
		["1964-04-05T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1964-10-04T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1964-10-04T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1965" : helpers.makeTestYear("Europe/Lisbon", [
		["1965-04-04T01:59:59+00:00", "01:59:59", "WET", 0],
		["1965-04-04T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1965-10-03T01:59:59+00:00", "02:59:59", "WEST", -60],
		["1965-10-03T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1966" : helpers.makeTestYear("Europe/Lisbon", [
		["1966-04-03T01:59:59+00:00", "01:59:59", "WET", 0],
		["1966-04-03T02:00:00+00:00", "03:00:00", "CET", -60]
	]),

	"1976" : helpers.makeTestYear("Europe/Lisbon", [
		["1976-09-25T23:59:59+00:00", "00:59:59", "CET", -60],
		["1976-09-26T00:00:00+00:00", "00:00:00", "WET", 0]
	]),

	"1977" : helpers.makeTestYear("Europe/Lisbon", [
		["1977-03-26T23:59:59+00:00", "23:59:59", "WET", 0],
		["1977-03-27T00:00:00+00:00", "01:00:00", "WEST", -60],
		["1977-09-24T23:59:59+00:00", "00:59:59", "WEST", -60],
		["1977-09-25T00:00:00+00:00", "00:00:00", "WET", 0]
	]),

	"1978" : helpers.makeTestYear("Europe/Lisbon", [
		["1978-04-01T23:59:59+00:00", "23:59:59", "WET", 0],
		["1978-04-02T00:00:00+00:00", "01:00:00", "WEST", -60],
		["1978-09-30T23:59:59+00:00", "00:59:59", "WEST", -60],
		["1978-10-01T00:00:00+00:00", "00:00:00", "WET", 0]
	]),

	"1979" : helpers.makeTestYear("Europe/Lisbon", [
		["1979-03-31T23:59:59+00:00", "23:59:59", "WET", 0],
		["1979-04-01T00:00:00+00:00", "01:00:00", "WEST", -60],
		["1979-09-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1979-09-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1980" : helpers.makeTestYear("Europe/Lisbon", [
		["1980-03-29T23:59:59+00:00", "23:59:59", "WET", 0],
		["1980-03-30T00:00:00+00:00", "01:00:00", "WEST", -60],
		["1980-09-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1980-09-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1981" : helpers.makeTestYear("Europe/Lisbon", [
		["1981-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1981-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1981-09-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1981-09-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1982" : helpers.makeTestYear("Europe/Lisbon", [
		["1982-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["1982-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1982-09-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1982-09-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1983" : helpers.makeTestYear("Europe/Lisbon", [
		["1983-03-27T01:59:59+00:00", "01:59:59", "WET", 0],
		["1983-03-27T02:00:00+00:00", "03:00:00", "WEST", -60],
		["1983-09-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1983-09-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1984" : helpers.makeTestYear("Europe/Lisbon", [
		["1984-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["1984-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1984-09-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1984-09-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1985" : helpers.makeTestYear("Europe/Lisbon", [
		["1985-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["1985-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1985-09-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1985-09-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1986" : helpers.makeTestYear("Europe/Lisbon", [
		["1986-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["1986-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1986-09-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1986-09-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1987" : helpers.makeTestYear("Europe/Lisbon", [
		["1987-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1987-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1987-09-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1987-09-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1988" : helpers.makeTestYear("Europe/Lisbon", [
		["1988-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["1988-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1988-09-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1988-09-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1989" : helpers.makeTestYear("Europe/Lisbon", [
		["1989-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["1989-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1989-09-24T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1989-09-24T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1990" : helpers.makeTestYear("Europe/Lisbon", [
		["1990-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["1990-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1990-09-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1990-09-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1991" : helpers.makeTestYear("Europe/Lisbon", [
		["1991-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["1991-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1991-09-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1991-09-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1992" : helpers.makeTestYear("Europe/Lisbon", [
		["1992-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1992-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1992-09-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1992-09-27T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1993" : helpers.makeTestYear("Europe/Lisbon", [
		["1993-03-28T00:59:59+00:00", "01:59:59", "CET", -60],
		["1993-03-28T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1993-09-26T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1993-09-26T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1994" : helpers.makeTestYear("Europe/Lisbon", [
		["1994-03-27T00:59:59+00:00", "01:59:59", "CET", -60],
		["1994-03-27T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1994-09-25T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1994-09-25T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1995" : helpers.makeTestYear("Europe/Lisbon", [
		["1995-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["1995-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1995-09-24T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1995-09-24T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1996" : helpers.makeTestYear("Europe/Lisbon", [
		["1996-03-31T00:59:59+00:00", "01:59:59", "CET", -60],
		["1996-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1996-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1996-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1997" : helpers.makeTestYear("Europe/Lisbon", [
		["1997-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["1997-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1997-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1997-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1998" : helpers.makeTestYear("Europe/Lisbon", [
		["1998-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1998-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1998-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1998-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1999" : helpers.makeTestYear("Europe/Lisbon", [
		["1999-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["1999-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1999-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1999-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2000" : helpers.makeTestYear("Europe/Lisbon", [
		["2000-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2000-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2000-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2000-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2001" : helpers.makeTestYear("Europe/Lisbon", [
		["2001-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2001-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2001-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2001-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2002" : helpers.makeTestYear("Europe/Lisbon", [
		["2002-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2002-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2002-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2002-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2003" : helpers.makeTestYear("Europe/Lisbon", [
		["2003-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2003-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2003-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2003-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2004" : helpers.makeTestYear("Europe/Lisbon", [
		["2004-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2004-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2004-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2004-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2005" : helpers.makeTestYear("Europe/Lisbon", [
		["2005-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2005-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2005-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2005-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2006" : helpers.makeTestYear("Europe/Lisbon", [
		["2006-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2006-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2006-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2006-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2007" : helpers.makeTestYear("Europe/Lisbon", [
		["2007-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2007-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2007-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2007-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2008" : helpers.makeTestYear("Europe/Lisbon", [
		["2008-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2008-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2008-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2008-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2009" : helpers.makeTestYear("Europe/Lisbon", [
		["2009-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2009-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2009-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2009-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2010" : helpers.makeTestYear("Europe/Lisbon", [
		["2010-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2010-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2010-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2010-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2011" : helpers.makeTestYear("Europe/Lisbon", [
		["2011-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2011-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2011-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2011-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2012" : helpers.makeTestYear("Europe/Lisbon", [
		["2012-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2012-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2012-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2012-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2013" : helpers.makeTestYear("Europe/Lisbon", [
		["2013-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2013-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2013-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2013-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2014" : helpers.makeTestYear("Europe/Lisbon", [
		["2014-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2014-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2014-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2014-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2015" : helpers.makeTestYear("Europe/Lisbon", [
		["2015-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2015-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2015-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2015-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2016" : helpers.makeTestYear("Europe/Lisbon", [
		["2016-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2016-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2016-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2016-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2017" : helpers.makeTestYear("Europe/Lisbon", [
		["2017-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2017-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2017-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2017-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2018" : helpers.makeTestYear("Europe/Lisbon", [
		["2018-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2018-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2018-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2018-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2019" : helpers.makeTestYear("Europe/Lisbon", [
		["2019-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2019-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2019-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2019-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2020" : helpers.makeTestYear("Europe/Lisbon", [
		["2020-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2020-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2020-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2020-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2021" : helpers.makeTestYear("Europe/Lisbon", [
		["2021-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2021-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2021-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2021-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2022" : helpers.makeTestYear("Europe/Lisbon", [
		["2022-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2022-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2022-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2022-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2023" : helpers.makeTestYear("Europe/Lisbon", [
		["2023-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2023-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2023-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2023-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2024" : helpers.makeTestYear("Europe/Lisbon", [
		["2024-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2024-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2024-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2024-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2025" : helpers.makeTestYear("Europe/Lisbon", [
		["2025-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2025-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2025-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2025-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2026" : helpers.makeTestYear("Europe/Lisbon", [
		["2026-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2026-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2026-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2026-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2027" : helpers.makeTestYear("Europe/Lisbon", [
		["2027-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2027-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2027-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2027-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2028" : helpers.makeTestYear("Europe/Lisbon", [
		["2028-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2028-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2028-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2028-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2029" : helpers.makeTestYear("Europe/Lisbon", [
		["2029-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2029-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2029-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2029-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2030" : helpers.makeTestYear("Europe/Lisbon", [
		["2030-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2030-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2030-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2030-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2031" : helpers.makeTestYear("Europe/Lisbon", [
		["2031-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2031-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2031-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2031-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2032" : helpers.makeTestYear("Europe/Lisbon", [
		["2032-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2032-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2032-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2032-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2033" : helpers.makeTestYear("Europe/Lisbon", [
		["2033-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2033-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2033-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2033-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2034" : helpers.makeTestYear("Europe/Lisbon", [
		["2034-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2034-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2034-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2034-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2035" : helpers.makeTestYear("Europe/Lisbon", [
		["2035-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2035-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2035-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2035-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2036" : helpers.makeTestYear("Europe/Lisbon", [
		["2036-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2036-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2036-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2036-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2037" : helpers.makeTestYear("Europe/Lisbon", [
		["2037-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2037-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2037-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2037-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	])
};