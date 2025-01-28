"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Belize"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Belize", { offset: true, expect: "America/Mexico_City" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Belize", { abbr: true, expect: "America/Mexico_City" }),

	"1912" : helpers.makeTestYear("America/Belize", [
		["1912-04-01T05:52:47+00:00", "23:59:59", "LMT", 21168 / 60],
		["1912-04-01T05:52:48+00:00", "23:52:48", "CST", 360]
	]),

	"1918" : helpers.makeTestYear("America/Belize", [
		["1918-10-06T05:59:59+00:00", "23:59:59", "CST", 360],
		["1918-10-06T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1919" : helpers.makeTestYear("America/Belize", [
		["1919-02-09T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1919-02-09T05:30:00+00:00", "23:30:00", "CST", 360],
		["1919-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1919-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1920" : helpers.makeTestYear("America/Belize", [
		["1920-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1920-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1920-10-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1920-10-03T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1921" : helpers.makeTestYear("America/Belize", [
		["1921-02-13T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1921-02-13T05:30:00+00:00", "23:30:00", "CST", 360],
		["1921-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1921-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1922" : helpers.makeTestYear("America/Belize", [
		["1922-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1922-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1922-10-08T05:59:59+00:00", "23:59:59", "CST", 360],
		["1922-10-08T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1923" : helpers.makeTestYear("America/Belize", [
		["1923-02-11T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1923-02-11T05:30:00+00:00", "23:30:00", "CST", 360],
		["1923-10-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["1923-10-07T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1924" : helpers.makeTestYear("America/Belize", [
		["1924-02-10T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1924-02-10T05:30:00+00:00", "23:30:00", "CST", 360],
		["1924-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1924-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1925" : helpers.makeTestYear("America/Belize", [
		["1925-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1925-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1925-10-04T05:59:59+00:00", "23:59:59", "CST", 360],
		["1925-10-04T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1926" : helpers.makeTestYear("America/Belize", [
		["1926-02-14T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1926-02-14T05:30:00+00:00", "23:30:00", "CST", 360],
		["1926-10-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1926-10-03T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1927" : helpers.makeTestYear("America/Belize", [
		["1927-02-13T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1927-02-13T05:30:00+00:00", "23:30:00", "CST", 360],
		["1927-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1927-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1928" : helpers.makeTestYear("America/Belize", [
		["1928-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1928-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1928-10-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["1928-10-07T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1929" : helpers.makeTestYear("America/Belize", [
		["1929-02-10T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1929-02-10T05:30:00+00:00", "23:30:00", "CST", 360],
		["1929-10-06T05:59:59+00:00", "23:59:59", "CST", 360],
		["1929-10-06T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1930" : helpers.makeTestYear("America/Belize", [
		["1930-02-09T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1930-02-09T05:30:00+00:00", "23:30:00", "CST", 360],
		["1930-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1930-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1931" : helpers.makeTestYear("America/Belize", [
		["1931-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1931-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1931-10-04T05:59:59+00:00", "23:59:59", "CST", 360],
		["1931-10-04T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1932" : helpers.makeTestYear("America/Belize", [
		["1932-02-14T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1932-02-14T05:30:00+00:00", "23:30:00", "CST", 360],
		["1932-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1932-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1933" : helpers.makeTestYear("America/Belize", [
		["1933-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1933-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1933-10-08T05:59:59+00:00", "23:59:59", "CST", 360],
		["1933-10-08T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1934" : helpers.makeTestYear("America/Belize", [
		["1934-02-11T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1934-02-11T05:30:00+00:00", "23:30:00", "CST", 360],
		["1934-10-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["1934-10-07T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1935" : helpers.makeTestYear("America/Belize", [
		["1935-02-10T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1935-02-10T05:30:00+00:00", "23:30:00", "CST", 360],
		["1935-10-06T05:59:59+00:00", "23:59:59", "CST", 360],
		["1935-10-06T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1936" : helpers.makeTestYear("America/Belize", [
		["1936-02-09T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1936-02-09T05:30:00+00:00", "23:30:00", "CST", 360],
		["1936-10-04T05:59:59+00:00", "23:59:59", "CST", 360],
		["1936-10-04T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1937" : helpers.makeTestYear("America/Belize", [
		["1937-02-14T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1937-02-14T05:30:00+00:00", "23:30:00", "CST", 360],
		["1937-10-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1937-10-03T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1938" : helpers.makeTestYear("America/Belize", [
		["1938-02-13T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1938-02-13T05:30:00+00:00", "23:30:00", "CST", 360],
		["1938-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1938-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1939" : helpers.makeTestYear("America/Belize", [
		["1939-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1939-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1939-10-08T05:59:59+00:00", "23:59:59", "CST", 360],
		["1939-10-08T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1940" : helpers.makeTestYear("America/Belize", [
		["1940-02-11T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1940-02-11T05:30:00+00:00", "23:30:00", "CST", 360],
		["1940-10-06T05:59:59+00:00", "23:59:59", "CST", 360],
		["1940-10-06T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1941" : helpers.makeTestYear("America/Belize", [
		["1941-02-09T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1941-02-09T05:30:00+00:00", "23:30:00", "CST", 360],
		["1941-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1941-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1942" : helpers.makeTestYear("America/Belize", [
		["1942-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1942-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1942-06-28T05:59:59+00:00", "23:59:59", "CST", 360],
		["1942-06-28T06:00:00+00:00", "01:00:00", "CWT", 300]
	]),

	"1945" : helpers.makeTestYear("America/Belize", [
		["1945-08-14T22:59:59+00:00", "17:59:59", "CWT", 300],
		["1945-08-14T23:00:00+00:00", "18:00:00", "CPT", 300],
		["1945-12-16T04:59:59+00:00", "23:59:59", "CPT", 300],
		["1945-12-16T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1947" : helpers.makeTestYear("America/Belize", [
		["1947-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1947-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1948" : helpers.makeTestYear("America/Belize", [
		["1948-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1948-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1948-10-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1948-10-03T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1949" : helpers.makeTestYear("America/Belize", [
		["1949-02-13T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1949-02-13T05:30:00+00:00", "23:30:00", "CST", 360],
		["1949-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1949-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1950" : helpers.makeTestYear("America/Belize", [
		["1950-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1950-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1950-10-08T05:59:59+00:00", "23:59:59", "CST", 360],
		["1950-10-08T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1951" : helpers.makeTestYear("America/Belize", [
		["1951-02-11T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1951-02-11T05:30:00+00:00", "23:30:00", "CST", 360],
		["1951-10-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["1951-10-07T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1952" : helpers.makeTestYear("America/Belize", [
		["1952-02-10T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1952-02-10T05:30:00+00:00", "23:30:00", "CST", 360],
		["1952-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1952-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1953" : helpers.makeTestYear("America/Belize", [
		["1953-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1953-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1953-10-04T05:59:59+00:00", "23:59:59", "CST", 360],
		["1953-10-04T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1954" : helpers.makeTestYear("America/Belize", [
		["1954-02-14T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1954-02-14T05:30:00+00:00", "23:30:00", "CST", 360],
		["1954-10-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1954-10-03T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1955" : helpers.makeTestYear("America/Belize", [
		["1955-02-13T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1955-02-13T05:30:00+00:00", "23:30:00", "CST", 360],
		["1955-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1955-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1956" : helpers.makeTestYear("America/Belize", [
		["1956-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1956-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1956-10-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["1956-10-07T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1957" : helpers.makeTestYear("America/Belize", [
		["1957-02-10T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1957-02-10T05:30:00+00:00", "23:30:00", "CST", 360],
		["1957-10-06T05:59:59+00:00", "23:59:59", "CST", 360],
		["1957-10-06T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1958" : helpers.makeTestYear("America/Belize", [
		["1958-02-09T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1958-02-09T05:30:00+00:00", "23:30:00", "CST", 360],
		["1958-10-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1958-10-05T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1959" : helpers.makeTestYear("America/Belize", [
		["1959-02-15T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1959-02-15T05:30:00+00:00", "23:30:00", "CST", 360],
		["1959-10-04T05:59:59+00:00", "23:59:59", "CST", 360],
		["1959-10-04T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1960" : helpers.makeTestYear("America/Belize", [
		["1960-02-14T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1960-02-14T05:30:00+00:00", "23:30:00", "CST", 360],
		["1960-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1960-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1961" : helpers.makeTestYear("America/Belize", [
		["1961-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1961-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1961-10-08T05:59:59+00:00", "23:59:59", "CST", 360],
		["1961-10-08T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1962" : helpers.makeTestYear("America/Belize", [
		["1962-02-11T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1962-02-11T05:30:00+00:00", "23:30:00", "CST", 360],
		["1962-10-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["1962-10-07T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1963" : helpers.makeTestYear("America/Belize", [
		["1963-02-10T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1963-02-10T05:30:00+00:00", "23:30:00", "CST", 360],
		["1963-10-06T05:59:59+00:00", "23:59:59", "CST", 360],
		["1963-10-06T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1964" : helpers.makeTestYear("America/Belize", [
		["1964-02-09T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1964-02-09T05:30:00+00:00", "23:30:00", "CST", 360],
		["1964-10-04T05:59:59+00:00", "23:59:59", "CST", 360],
		["1964-10-04T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1965" : helpers.makeTestYear("America/Belize", [
		["1965-02-14T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1965-02-14T05:30:00+00:00", "23:30:00", "CST", 360],
		["1965-10-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1965-10-03T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1966" : helpers.makeTestYear("America/Belize", [
		["1966-02-13T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1966-02-13T05:30:00+00:00", "23:30:00", "CST", 360],
		["1966-10-02T05:59:59+00:00", "23:59:59", "CST", 360],
		["1966-10-02T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1967" : helpers.makeTestYear("America/Belize", [
		["1967-02-12T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1967-02-12T05:30:00+00:00", "23:30:00", "CST", 360],
		["1967-10-08T05:59:59+00:00", "23:59:59", "CST", 360],
		["1967-10-08T06:00:00+00:00", "00:30:00", "-0530", 330]
	]),

	"1968" : helpers.makeTestYear("America/Belize", [
		["1968-02-11T05:29:59+00:00", "23:59:59", "-0530", 330],
		["1968-02-11T05:30:00+00:00", "23:30:00", "CST", 360]
	]),

	"1973" : helpers.makeTestYear("America/Belize", [
		["1973-12-05T05:59:59+00:00", "23:59:59", "CST", 360],
		["1973-12-05T06:00:00+00:00", "01:00:00", "CDT", 300]
	]),

	"1974" : helpers.makeTestYear("America/Belize", [
		["1974-02-09T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1974-02-09T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1982" : helpers.makeTestYear("America/Belize", [
		["1982-12-18T05:59:59+00:00", "23:59:59", "CST", 360],
		["1982-12-18T06:00:00+00:00", "01:00:00", "CDT", 300]
	]),

	"1983" : helpers.makeTestYear("America/Belize", [
		["1983-02-12T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1983-02-12T05:00:00+00:00", "23:00:00", "CST", 360]
	])
};